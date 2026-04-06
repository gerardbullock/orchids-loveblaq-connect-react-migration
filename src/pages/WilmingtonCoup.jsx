import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, AlertTriangle, Landmark } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const timeline = [
  {
    year: '1890s',
    label: 'A Thriving Biracial Democracy',
    color: '#3c6e71',
    detail: 'Wilmington, North Carolina is one of the most politically integrated cities in the post-Civil War South. A "Fusionist" coalition of Black Republicans and white Populists holds power. Black men hold elected office — aldermen, magistrates, a deputy sheriff, a health inspector. The city has a prosperous Black middle class. Alexander Manly runs The Daily Record, the only Black-owned daily newspaper in the United States.',
  },
  {
    year: 'August 18, 1898',
    label: 'The Editorial That Became the Pretext',
    color: '#b8860b',
    detail: 'Editor Alexander Manly publishes a response to Rebecca Felton, a white Georgian who claimed Black men were a threat to white women. Manly writes that some white women willingly enter relationships with Black men. The editorial is factual. White supremacists seize on it as an outrage — and use it as the pretext for the campaign already in motion.',
  },
  {
    year: 'November 8, 1898',
    label: 'Election Stolen by Terror',
    color: '#c0392b',
    detail: 'Democratic Party operatives deploy the "Red Shirts" paramilitary group to intimidate Black voters across North Carolina. Ballot boxes are stuffed. Democrats take the state legislature. But the local Wilmington Fusionist government — whose term has not yet ended — remains in office. It cannot simply be voted out. So the conspirators plan something else.',
  },
  {
    year: 'November 9, 1898',
    label: 'The White Declaration of Independence',
    color: '#c0392b',
    detail: 'A mass meeting at the Wilmington Courthouse approves a document called the "White Declaration of Independence," asserting that white men will never again be governed by men of African origin. An ultimatum is issued to Black leaders: shut down The Daily Record and remove Manly from the city by the next morning. The reply does not come fast enough.',
  },
  {
    year: 'November 10, 1898 — Morning',
    label: 'The Newspaper Burns',
    color: '#c0392b',
    detail: 'A white mob of approximately 2,000, led by former Confederate officer Alfred Moore Waddell, marches to the offices of The Daily Record at 8:00 AM. They torch it to the ground. This is not a spontaneous riot. The planning was meticulous. The "Secret Nine" — a group of the city\'s most prominent white business leaders — had been coordinating for months.',
  },
  {
    year: 'November 10, 1898 — Midday',
    label: 'The Massacre and the Coup',
    color: '#c0392b',
    detail: 'Militia and Red Shirts open fire on Black citizens at 4th and Harnett Streets. Estimates of the dead range from 22 to over 250 — the bodies of many were never officially recorded. By 4:00 PM, the legally elected Mayor and Board of Aldermen are marched to City Hall and forced to resign at gunpoint. Waddell is immediately "elected" Mayor. The United States government does nothing. President McKinley is petitioned for help and refuses.',
  },
  {
    year: 'November–December 1898',
    label: 'The Purge',
    color: '#c0392b',
    detail: 'Over 2,100 Black residents flee Wilmington in the days and weeks following the coup. Prominent Black officeholders, professionals, and business owners are exiled — some at gunpoint, escorted to the edge of town. Many never return. The property they leave behind is seized or sold for nothing. Alexander Manly escapes to Philadelphia. The coup is complete.',
  },
  {
    year: '2000–2006',
    label: 'The State Finally Names It',
    color: '#3c6e71',
    detail: 'North Carolina establishes the 1898 Wilmington Race Riot Commission. Its 2006 report — 480 pages — formally classifies the event as a coup d\'état and massacre, not a riot. It recommends economic reparations for descendants. No reparations are paid. A state historical marker is placed in Wilmington.',
  },
];

const facts = [
  { label: 'Date',         value: 'November 10, 1898',      detail: 'The only successful coup d\'état in U.S. history' },
  { label: 'Location',     value: 'Wilmington, NC',          detail: 'One of the most politically integrated cities in the South' },
  { label: 'Deaths',       value: '22 – 250+',               detail: 'Official: ~22. Historians estimate up to 250+ — most unrecorded' },
  { label: 'Displaced',    value: '2,100+ residents',        detail: 'Entire Black professional class exiled within weeks' },
  { label: 'What was taken', value: 'A government',          detail: 'A democratically elected, legally serving biracial city government — overthrown by force' },
  { label: 'Prosecutions', value: 'Zero',                    detail: 'Not one conspirator, killer, or arsonist was ever charged' },
];

const figures = [
  { name: 'Alexander Manly',       role: 'Editor of The Daily Record. His editorial became the pretext. He escaped to Philadelphia. His press was burned.' },
  { name: 'Alfred Moore Waddell',  role: 'Former Confederate officer. Led the mob. Forced the Mayor\'s resignation. Installed himself as Mayor the same afternoon.' },
  { name: 'The Secret Nine',       role: 'Wilmington\'s most powerful white businessmen. Planned the coup for months. Never charged with anything.' },
  { name: 'Furnifold Simmons',     role: 'State Democratic Party chairman who orchestrated the three-pronged statewide white supremacy campaign.' },
  { name: 'Joshua Halsey',         role: 'A laborer shot 14 times in the back. One of the confirmed Black victims of the massacre.' },
  { name: 'Josephus Daniels',      role: 'Editor of the Raleigh News & Observer. Provided the propaganda. Later became Woodrow Wilson\'s Secretary of the Navy.' },
];

export default function WilmingtonCoup() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#080508', padding: 'clamp(4rem,10vw,8rem) clamp(1.5rem,5vw,4rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, rgba(100,30,130,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 28, height: 3, background: '#7b2d8b', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#9b4dab' }}>Wilmington, North Carolina · November 10, 1898</span>
              <div style={{ width: 28, height: 3, background: '#7b2d8b', borderRadius: 99 }} />
            </div>
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2.4rem,8vw,5.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.0, color: '#fff', marginBottom: 24 }}>
            The Wilmington<br /><span style={{ color: '#9b4dab' }}>Insurrection</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} style={{ color: 'rgba(255,255,255,0.52)', fontSize: 'clamp(0.95rem,1.8vw,1.1rem)', lineHeight: 1.78, maxWidth: '56ch', marginBottom: 28 }}>
            In 1898, white supremacists in North Carolina overthrew a democratically elected, legally serving biracial government by force. It is the only successful coup d'état in United States history.
          </motion.p>
          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Wilmington, NC', 'November 1898', 'Only U.S. Coup', '0 Prosecutions'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)', fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 99 }}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <div style={{ background: '#0d080e', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.05rem,2.2vw,1.4rem)', fontStyle: 'italic', fontWeight: 500, color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, margin: 0 }}>
            "We will never live under the domination of the negro. We have determined to change the government of this city at the cost of our lives."
          </p>
          <div style={{ marginTop: 12, fontFamily: 'Roboto Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em' }}>
            — Alfred Moore Waddell, address to the white mob, November 10, 1898 — installed as Mayor by force the same day
          </div>
        </div>
      </div>

      {/* Facts */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#9b4dab', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#9b4dab' }}>Key Facts</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 12 }}>
            {facts.map(f => (
              <div key={f.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px', boxShadow: '0 2px 8px rgba(53,53,53,0.05)' }}>
                <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.56rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9b4dab', marginBottom: 6 }}>{f.label}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem', fontWeight: 900, color: '#353535', marginBottom: 5, letterSpacing: '-0.01em' }}>{f.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{f.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coup mechanics callout */}
      <section style={{ background: 'var(--bg-elevated)', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ background: 'rgba(155,77,171,0.07)', border: '1.5px solid rgba(155,77,171,0.25)', borderRadius: 14, padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 18 }}>
            <AlertTriangle size={18} color="#9b4dab" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 800, color: '#9b4dab', marginBottom: 6 }}>How a Coup Works When No One Stops It</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#353535', lineHeight: 1.7, margin: 0 }}>
                The Fusionist government's term hadn't expired — they couldn't simply be voted out. So the conspirators forced their resignation at gunpoint and immediately "elected" their own replacements one by one, preserving the facade of legal continuity. President McKinley was petitioned for federal intervention. He refused, citing the lack of a formal request from the Governor — who was himself being threatened. The federal government watched a democracy be destroyed and did nothing.
              </p>
            </div>
          </div>
          <div style={{ background: 'rgba(192,57,43,0.05)', border: '1.5px solid rgba(192,57,43,0.2)', borderRadius: 14, padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <AlertTriangle size={18} color="#c0392b" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 800, color: '#c0392b', marginBottom: 6 }}>The Three-Pronged Strategy</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#353535', lineHeight: 1.7, margin: 0 }}>
                Democratic Party chairman Furnifold Simmons organized the campaign with military precision: men who could write (propaganda via newspapers), men who could speak (orators like Waddell and Governor-elect Aycock), and men who could ride (Red Shirts paramilitary units for physical terror). It was a coordinated, premeditated overthrow — not a spontaneous outbreak of violence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(3.5rem,7vw,6rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>Timeline</span>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, #3c6e71, #c0392b 30%, #c0392b 80%, #3c6e71)', borderRadius: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07, duration: 0.5 }} style={{ display: 'flex', gap: 20 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', flexShrink: 0, background: item.color, border: '3px solid var(--bg)', boxShadow: `0 0 0 2px ${item.color}33`, marginTop: 2 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: item.color, marginBottom: 4 }}>{item.year}</div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: 800, color: '#353535', lineHeight: 1.2, marginBottom: 8 }}>{item.label}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.72, margin: 0 }}>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* People */}
      <section style={{ background: '#fff', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>People to Remember</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
            {figures.map(f => (
              <div key={f.name} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', fontWeight: 800, color: '#353535', marginBottom: 6 }}>{f.name}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.62 }}>{f.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section style={{ background: '#080508', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Landmark size={32} color="#9b4dab" style={{ margin: '0 auto 24px' }} />
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
            They won an election.<br /><span style={{ color: '#9b4dab' }}>A mob took it back.</span><br /><span style={{ color: '#3c6e71' }}>No one was charged.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 1.78, margin: '0 auto 36px', maxWidth: '46ch' }}>
            The Wilmington coup was not the last time American democracy failed Black voters. But it remains the only time an entire elected government was physically overthrown and replaced by an armed white supremacist mob.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/elaine-massacre')} style={{ background: '#3c6e71', color: '#fff', border: 'none', borderRadius: 12, padding: '0.9rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7 }} onMouseEnter={e => e.currentTarget.style.background = '#2a5255'} onMouseLeave={e => e.currentTarget.style.background = '#3c6e71'}>
              Elaine Massacre <ArrowRight size={15} />
            </button>
            <a href="https://en.wikipedia.org/wiki/Wilmington_massacre_of_1898" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: 'rgba(255,255,255,0.62)', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '0.9rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <ExternalLink size={14} /> Wikipedia Article
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
