# Nedunthatchan Architects

An elite, high-performance web platform and digital portfolio for **Nedunthatchan Architects**, an architectural and interior design studio based in Kasipalayam, Erode, Tamil Nadu. The platform features an interactive showcase of residential and commercial works, along with **Aura**, an intelligent architectural concierge powered by Google Gemini.

---

## ✨ Features

- **🏛️ Cinematic Portfolio Showcase**: Dynamic project galleries spanning contemporary residential villas, luxury interiors, commercial landmarks, and biophilic spaces.
- **🤖 Aura AI Concierge**: Built-in AI consultant powered by Google Gemini (`gemini-3.8-flash`) to guide prospective clients through design philosophy, project planning, spatial zoning, and studio consultations.
- **✨ Fluid Micro-Interactions**: Smooth animations and transitions crafted with Motion (Framer Motion) and modern Tailwind CSS.
- **📱 Responsive & Accessible**: Optimized for all form factors with dark/light biophilic design aesthetics.
- **📞 Direct Engagement**: Integrated enquiry modal, one-click WhatsApp consultation, phone dialer, and Google Maps directions to the studio in Kasipalayam, Erode.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations & Icons**: [Motion](https://motion.dev/) (Framer Motion v12), [Lucide React](https://lucide.dev/)
- **Backend**: [Express](https://expressjs.com/) with [Vite](https://vitejs.dev/) middleware integration
- **AI Integration**: [@google/genai SDK](https://www.npmjs.com/package/@google/genai)
- **Runtime & Tooling**: Node.js, [tsx](https://github.com/privatenumber/tsx), Vite

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### 1. Installation

Clone or extract the repository and install dependencies:

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory by copying `.env.example`:

```bash
cp .env.example .env
```

Add your Gemini API key (optional for UI browsing; required for live AI chatbot responses):

```env
GEMINI_API_KEY="your-google-gemini-api-key"
```

> *Note: If `GEMINI_API_KEY` is not provided, the Aura chat assistant gracefully falls back to pre-configured studio guidance and direct contact details.*

### 3. Run the Development Server

Start the full-stack development server (Express backend + Vite HMR):

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **`npm run dev`** | `tsx server.ts` | Starts the Express server with Vite middleware on `http://localhost:3000` |
| **`npm run build`** | `vite build` | Compiles and builds production assets to the `dist` directory |
| **`npm run start`** | `tsx server.ts` | Runs the server in production mode (serves compiled static assets) |
| **`npm run lint`** | `tsc --noEmit` | Runs TypeScript type checking across the project |
| **`npm run clean`** | `rm -rf dist server.js` | Removes generated build artifacts |

---

## 📁 Project Structure

```plaintext
├── public/                 # Static assets and icons
├── src/
│   ├── assets/             # Project imagery and architectural photography
│   ├── components/         # React UI components
│   │   ├── AboutSection.tsx      # Studio profile, ethos, and leadership
│   │   ├── AuraChatbot.tsx       # AI Architectural Concierge widget
│   │   ├── ContactSection.tsx    # Contact forms, location, and maps
│   │   ├── EnquiryModal.tsx      # Consultation booking modal
│   │   ├── Footer.tsx            # Footer navigation & studio info
│   │   ├── HomeScreen.tsx        # Hero section & kinetic gallery
│   │   ├── Navbar.tsx            # Navigation header
│   │   ├── OpeningIntro.tsx      # Splash/intro cinematic animation
│   │   └── ProjectsSection.tsx   # Categorized project gallery & modal
│   ├── data/
│   │   └── studioData.ts   # Project specifications, studio metadata & images
│   ├── App.tsx             # Root application component
│   ├── index.css           # Global stylesheet & Tailwind directives
│   └── main.tsx            # React application entry point
├── .env.example            # Example environment configuration
├── index.html              # HTML entry template
├── package.json            # Project dependencies and scripts
├── server.ts               # Express server & Gemini API integration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 🏛️ Studio Details

- **Firm**: Nedunthatchan Architects
- **Owner & Principal Architect**: Ar. Karthikraja G, B.Arch, COA Registered
- **Location**: 193A, Near Lakshmi Nei Store, Valayakara Street, Kasipalayam, Erode - 638009, Tamil Nadu, India
- **Phone**: +91 9500975083
