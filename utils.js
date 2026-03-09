/**
 * Format seconds as MM:SS
 * @param {number} seconds
 * @returns {string}
 */
export function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0')
  const s = String(seconds % 60).padStart(2, '0')
  return `${m}:${s}`
}

/**
 * Build the AI transcription prompt.
 * @param {{ file: File|null, text: string, tags: string[] }} opts
 * @returns {string}
 */
export function buildPrompt({ file, text, tags }) {
  const ctx = tags.length ? `Specialty context: ${tags.join(', ')}. ` : ''
  if (file) {
    return (
      `You are an expert clinical transcriptionist. Produce a polished structured clinical note ` +
      `in SOAP format for a ${tags[0] || 'general medicine'} consultation. ` +
      `Sections: PATIENT INFO, PRESENTING COMPLAINT, HISTORY, PAST MEDICAL HISTORY, ` +
      `MEDICATIONS, EXAMINATION, IMPRESSION, PLAN. ` +
      `Use accurate medical terminology. 350–450 words. ${ctx}` +
      `Audio filename: "${file.name}".`
    )
  }
  return (
    `You are an expert clinical transcriptionist. Reformat this raw dictation into a polished ` +
    `SOAP clinical note with complete sections and professional medical language. ${ctx}\n\n` +
    `Raw dictation:\n${text}`
  )
}
