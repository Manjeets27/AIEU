// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { id: 'dash',       label: 'Dashboard',  icon: '▦' },
  { id: 'transcribe', label: 'Transcribe', icon: '⊕', badge: 'New' },
  { id: 'records',    label: 'Records',    icon: '⊞' },
  { id: 'billing',    label: 'Billing',    icon: '◈' },
  { id: 'gdpr',       label: 'Privacy',    icon: '⊛' },
]

export const PAGE_META = {
  dash:       { heading: 'Dashboard',           sub: 'Good morning, Dr. Müller' },
  transcribe: { heading: 'New Transcription',   sub: 'Upload audio, record, or dictate' },
  records:    { heading: 'Transcript Records',  sub: 'Your complete transcription history' },
  billing:    { heading: 'Billing & Plans',     sub: 'Manage your subscription' },
  gdpr:       { heading: 'Privacy & GDPR',      sub: 'Data protection & compliance controls' },
}

// ─── Subscription plans ───────────────────────────────────────────────────────
export const PLANS = [
  {
    id: 'free',
    name: 'Starter',
    price: '€0',
    active: true,
    featured: false,
    cta: 'Current Plan',
    features: [
      '60 min / month',
      'EU-only data storage',
      'Basic medical vocabulary',
      'Manual review tools',
      'Email support',
    ],
  },
  {
    id: 'pro',
    name: 'Clinician Pro',
    price: '€49',
    active: false,
    featured: true,
    cta: 'Upgrade Now',
    features: [
      '1,200 min / month',
      'GDPR audit trail & export',
      'Specialised medical NLP',
      'EHR export (HL7 FHIR)',
      'Priority support',
      '23 EU languages',
      'Custom dictionary',
    ],
  },
  {
    id: 'enterprise',
    name: 'Hospital Suite',
    price: '€299',
    active: false,
    featured: false,
    cta: 'Contact Sales',
    features: [
      'Unlimited transcription',
      'DPA & BAA included',
      'On-premise option',
      'SSO / Active Directory',
      'Custom NLP models',
      'Dedicated account manager',
      '99.9% SLA',
    ],
  },
]

// ─── Sample records ───────────────────────────────────────────────────────────
export const SAMPLE_RECORDS = [
  { id: 1, title: 'Patient Consultation – Cardiology', date: '07 Mar 2026', duration: '12:34', words: 1842, specialty: 'Cardiology' },
  { id: 2, title: 'Post-Op Discharge Summary',         date: '06 Mar 2026', duration: '04:18', words: 634,  specialty: 'Surgery' },
  { id: 3, title: 'GP Referral Letter Dictation',      date: '05 Mar 2026', duration: '03:52', words: 512,  specialty: 'GP' },
]

// ─── Medical specialties ──────────────────────────────────────────────────────
export const SPECIALTIES = [
  'Cardiology', 'Oncology', 'GP', 'Psychiatry',
  'Radiology', 'Orthopaedics', 'Neurology', 'Emergency',
]

// ─── EU billing countries ─────────────────────────────────────────────────────
export const EU_COUNTRIES = [
  'Germany', 'France', 'Spain', 'Italy', 'Netherlands',
  'Poland', 'Sweden', 'Denmark', 'Austria', 'Belgium',
  'Portugal', 'Finland', 'Ireland', 'Greece', 'Czech Republic',
]

// ─── GDPR info blocks ─────────────────────────────────────────────────────────
export const GDPR_ITEMS = [
  {
    emoji: '🇪🇺',
    title: 'EU Data Residency',
    body:  'All audio and transcripts on AWS eu-central-1 (Frankfurt). No data leaves the EU/EEA. Sub-processor list available on request.',
  },
  {
    emoji: '🔒',
    title: 'Encryption at Rest & Transit',
    body:  'AES-256 at rest. TLS 1.3 in transit. Keys managed by AWS KMS within the EU. Zero-knowledge architecture for audio files.',
  },
  {
    emoji: '🗑',
    title: 'Right to Erasure (Art. 17)',
    body:  'Delete any transcript instantly. Full account erasure within 72 hours. Auto-purge at retention end. Erasure certificate issued.',
  },
  {
    emoji: '📤',
    title: 'Data Portability (Art. 20)',
    body:  'Export everything as JSON, CSV, or HL7 FHIR. No lock-in. EHR migration tools included at no extra cost.',
  },
  {
    emoji: '📋',
    title: 'Access & Audit Log',
    body:  'Every data access logged: timestamp, user ID, IP. Download CSV audit logs for DPA compliance records.',
  },
  {
    emoji: '📜',
    title: 'Lawful Basis & Consent',
    body:  'Processing on GDPR Art. 9(2)(h) — healthcare treatment. Consent records immutably stored with timestamp and form version.',
  },
]
