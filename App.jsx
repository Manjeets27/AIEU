import { useState, useEffect } from 'react'

import { PAGE_META } from './constants'
import Sidebar       from './components/Sidebar'
import Topbar        from './components/Topbar'
import ConsentBanner from './components/ConsentBanner'
import Dashboard     from './pages/Dashboard'
import Transcribe    from './pages/Transcribe'
import Records       from './pages/Records'
import Billing       from './pages/Billing'
import GDPRPage      from './pages/GDPRPage'

const PAGES = {
  dash:       Dashboard,
  transcribe: Transcribe,
  records:    Records,
  billing:    Billing,
  gdpr:       GDPRPage,
}

export default function App() {
  const [page, setPage]       = useState('dash')
  const [consent, setConsent] = useState(false)

  // Persist consent so the banner doesn't reappear on reload
  useEffect(() => {
    if (localStorage.getItem('ms_gdpr') === '1') setConsent(true)
  }, [])

  const handleConsent = () => {
    localStorage.setItem('ms_gdpr', '1')
    setConsent(true)
  }

  const meta = PAGE_META[page]
  const Page = PAGES[page]

  return (
    <div className="layout">
      <Sidebar page={page} onNav={setPage} />

      <main className="main">
        <Topbar heading={meta.heading} sub={meta.sub} />
        <div className="content">
          <Page onNav={setPage} />
        </div>
      </main>

      {!consent && <ConsentBanner onAccept={handleConsent} />}
    </div>
  )
}
