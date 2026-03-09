/**
 * Design tokens — single source of truth for all colours, shadows, radii.
 * Import this wherever you need raw values (e.g. inline styles or JS logic).
 */
const tokens = {
  // Backgrounds
  bg:         '#F7F8FA',
  surface:    '#FFFFFF',
  faint:      '#F3F4F6',

  // Sidebar
  sidebar:    '#0C1220',

  // Borders
  border:     'rgba(0,0,0,0.07)',
  borderMid:  'rgba(0,0,0,0.11)',

  // Brand
  teal:       '#0EA5C2',
  tealDim:    'rgba(14,165,194,0.10)',
  tealGlow:   'rgba(14,165,194,0.22)',

  // Text
  ink:        '#111827',
  body:       '#374151',
  muted:      '#9CA3AF',

  // Semantic
  success:    '#10B981',
  successDim: 'rgba(16,185,129,0.09)',
  danger:     '#EF4444',
  dangerDim:  'rgba(239,68,68,0.09)',

  // Shadows
  shadow:     '0 1px 3px rgba(0,0,0,0.05), 0 4px 14px rgba(0,0,0,0.06)',
  shadowLg:   '0 4px 6px rgba(0,0,0,0.04), 0 16px 36px rgba(0,0,0,0.09)',
}

export default tokens
