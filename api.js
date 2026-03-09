/**
 * Call the Anthropic Messages API.
 *
 * In production you should proxy this through your own backend so the API key
 * is never exposed in the browser bundle.
 *
 * @param {string} prompt
 * @param {function(number): void} onProgress  — called with 0-100 during polling
 * @returns {Promise<string>}
 */
export async function transcribe(prompt, onProgress) {
  // Simulate progress while the real request runs
  let p = 0
  const iv = setInterval(() => {
    p = Math.min(p + Math.random() * 7, 90)
    onProgress(Math.round(p))
  }, 350)

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    clearInterval(iv)
    onProgress(100)

    if (!res.ok) throw new Error(`API error ${res.status}`)

    const data = await res.json()
    return data.content?.map((c) => c.text ?? '').join('') || 'Empty response — please retry.'
  } catch (err) {
    clearInterval(iv)
    throw err
  }
}
