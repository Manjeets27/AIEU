# MediScribe EU 🏥🇪🇺

> **GDPR-compliant AI transcription for European healthcare providers**
> Built with React + Vite · Powered by Claude (Anthropic) · EU-first by design

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎙️ AI Transcription | Upload audio or record in-browser; structured SOAP notes in seconds |
| ✏️ Dictation Formatting | Paste raw dictation → polished clinical note with proper sections |
| 🏥 Medical Specialties | Tag by specialty for context-aware AI output |
| 🇪🇺 GDPR Compliance | EU data residency, audit logs, right to erasure, consent management |
| 💳 Tiered Billing | Free (60 min), Clinician Pro (€49/mo), Hospital Suite (€299/mo) |
| 📋 EHR Export | HL7 FHIR export (Clinician Pro+) |
| 🔒 Privacy Controls | Retention settings, analytics opt-out, third-party integration toggles |

---

## 📁 Project Structure

```
mediscribe-eu/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ConsentBanner.jsx   GDPR consent popup
│   │   ├── Sidebar.jsx         Navigation sidebar
│   │   └── Topbar.jsx          Sticky top bar
│   ├── pages/
│   │   ├── Dashboard.jsx       Overview & stats
│   │   ├── Transcribe.jsx      AI transcription (upload / record / dictate)
│   │   ├── Records.jsx         Transcript history
│   │   ├── Billing.jsx         Plan selection & upgrade
│   │   └── GDPRPage.jsx        Privacy controls & compliance info
│   ├── styles/
│   │   └── global.css          Full design system (tokens, components, utilities)
│   ├── api.js                  Anthropic API call helper
│   ├── App.jsx                 Root shell & routing
│   ├── constants.js            All static data (plans, nav, records, GDPR blocks)
│   ├── main.jsx                React entry point
│   ├── tokens.js               Design tokens (JS object — mirrors CSS variables)
│   └── utils.js                formatTime(), buildPrompt()
├── .env.example                Environment variable template
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+**
- An [Anthropic API key](https://console.anthropic.com)

### 1 · Clone & install

```bash
git clone https://github.com/your-org/mediscribe-eu.git
cd mediscribe-eu
npm install
```

### 2 · Add your API key

```bash
cp .env.example .env
# Then edit .env and set VITE_ANTHROPIC_API_KEY
```

### 3 · Run locally

```bash
npm run dev
# → http://localhost:5173
```

### 4 · Build for production

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build
```

---

## 🌍 Deployment

### Vercel *(recommended — selects EU region)*
```bash
npm i -g vercel
vercel --prod
```
Set `VITE_ANTHROPIC_API_KEY` in Vercel → Project Settings → Environment Variables.
Choose **Frankfurt (fra1)** region for GDPR compliance.

### Netlify
```bash
npm run build
# Drag-and-drop /dist at app.netlify.com
```

### Docker (EU server)
```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

---

## 🛡️ GDPR Compliance Notes

MediScribe EU is designed to operate as a **Data Processor** under GDPR (Regulation EU 2016/679).
Your clinic or practice is the **Data Controller**.

| Mechanism | Implementation |
|---|---|
| EU Data Residency | Deploy to AWS `eu-central-1` or equivalent EU region |
| Encryption | AES-256 at rest · TLS 1.3 in transit |
| Consent | First-visit banner · persisted locally · no patient data in consent record |
| Erasure (Art. 17) | One-click delete per transcript · full purge on account deletion |
| Portability (Art. 20) | JSON / CSV / HL7 FHIR export |
| Audit Logging | Every access event logged with timestamp, user ID, IP |

> ⚠️ **Production checklist**
> 1. Add a **backend proxy** — never expose your Anthropic key in the browser bundle
> 2. Use Whisper (deployed in EU) for real audio-to-text conversion
> 3. Sign a **DPA** with all sub-processors (Anthropic, Stripe, etc.)
> 4. Conduct a **DPIA** before processing patient data
> 5. Register with your national DPA if required

---

## 💳 Stripe Billing Setup

1. Create a [Stripe](https://stripe.com) account and enable EU VAT handling
2. Add `VITE_STRIPE_PUBLISHABLE_KEY` to your `.env`
3. Implement a backend for webhook handling and subscription management

---

## 🤝 Contributing

PRs welcome. Please:
- Keep all test fixtures free of real patient data
- Consider GDPR implications for any new feature that handles data
- Default to EU-region deployment in any infrastructure code

---

## 📄 License

MIT © 2026 MediScribe EU Contributors
