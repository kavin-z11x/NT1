import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

const STUDIO_CONTEXT = `
You are "Aura", the elite AI architectural concierge and design consultant for "Nedunthatchan Architects".
Studio Information:
- Firm Name: Nedunthatchan Architects (also known as Nedunthachan Architects)
- Founder & Owner: Karthikraja G
- Principal Architect: Ar. Karthikraja G, B.Arch, Council of Architecture (COA) Registered
- Address: 193A, Near Lakshmi Nei Store, Valayakara Street, Kasipalayam, Erode-638009, Tamil Nadu
- Phone Number: +91 9500975083
- Core Philosophy: Nature and geometry are at the heart of our design philosophy. We integrate natural elements, passive cross-ventilation, daylighting, and regional Tamil Nadu microclimate harmony into timeless pieces of art.
- Services:
  1. Architectural Design: Residential villas, commercial complexes, and institutional designs.
  2. Interior Design: Residences, hospitality, boutiques, restaurants, cafes, corporate offices.
  3. Project Management: Turnkey execution maintaining quality, timeline, and budget.
- Why Choose Us:
  - Client-Centric Approach
  - Innovative Solutions (natural light, cross ventilation, airflow)
  - Sustainable Design (structures in harmony with nature)
  - Comprehensive Services (from concept to final key handover)
  - Quality and Timeline (highest standards, completed on time)
- Featured Verified Projects:
  - Our Luxury Duplex Villa Project in Coimbatore Structure (Coimbatore, Tamil Nadu) - Multi-level structural concrete framework & cantilevers.
  - வேலும் மயிலும் இல்லம் (Velum Mayilum Illam, Coimbatore) - Sacred Tamil cultural ethos & contemporary biophilic living.
  - The Cantilever Monolith · 3D to Reality - Structural fidelity translating digital 3D blueprints to on-site concrete reality.
  - The Tropical Biophilic Villa - Parametric daylighting, solar-shading louvers, and cascading terrace gardens.
  - Residence 12/02 (Kasipalayam, Erode) - Flagship contemporary residence balancing exposed concrete, vertical teak louvers, and passive ventilation.
  - Chellammal Complex (Sathy Road, Near Radhasports, Erode) - Multi-storey commercial landmark housing City Union Bank (CUB).

Tone & Instructions:
- Sophisticated, warm, professional, architecturally insightful, and helpful.
- Help clients understand architectural possibilities, passive cooling, room zoning, project stages, cost planning, and scheduling studio visits.
- Always provide the studio's contact info (+91 9500975083) or Kasipalayam address when clients ask how to get in touch.
- Keep answers concise, clear, and elegant.
`;

let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// API endpoint for Aura AI Chatbot
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      // Fallback response if API key is not yet set in environment
      return res.json({
        reply: `Welcome to Nedunthatchan Architects! I am Aura, your architectural assistant. Ar. Karthikraja G and our design team in Kasipalayam, Erode are ready to assist you. You can reach us directly at +91 9500975083 or visit our studio at 193A, Near Lakshmi Nei Store, Valayakara Street, Kasipalayam, Erode-638009. How can we help bring your dream home or project to life?`,
      });
    }

    const ai = getAiClient();

    // Build chat contents or prompt
    const contents: any[] = [];
    if (Array.isArray(history)) {
      for (const turn of history.slice(-6)) {
        if (turn.role === 'user' || turn.role === 'model') {
          contents.push({
            role: turn.role,
            parts: [{ text: turn.text || turn.content || '' }],
          });
        }
      }
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: STUDIO_CONTEXT,
      },
    });

    const reply = response.text || 'Thank you for contacting Nedunthatchan Architects. Please call us at +91 9500975083 to discuss your project.';
    return res.json({ reply });
  } catch (error: any) {
    console.error('Error generating response with Gemini:', error);
    // Provide a graceful, context-rich fallback rather than a broken chat
    return res.json({
      reply: `Thank you for your interest in Nedunthatchan Architects! We specialize in climate-responsive architectural design, luxury interiors, and turnkey project management. Please connect with Ar. Karthikraja G directly at +91 9500975083 or visit our studio at 193A, Near Lakshmi Nei Store, Valayakara Street, Kasipalayam, Erode-638009.`,
    });
  }
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Nedunthatchan Architects server running on http://localhost:${PORT}`);
  });
}

startServer();
