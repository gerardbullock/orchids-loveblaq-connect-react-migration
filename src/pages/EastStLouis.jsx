import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, AlertTriangle, Factory } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const timeline = [
  {
    year: 'February–May 1917',
    label: 'The Great Migration Arrives',
    color: '#3c6e71',
    detail: 'Tens of thousands of Black workers from the South arrive in East St. Louis, Illinois, drawn by industrial jobs at plants like the Aluminum Ore Company. Factory managers, locked in union disputes with their white workforce, deliberately hire Black workers as strikebreakers — knowing it will create racial tension and break union solidarity. The strategy works exactly as intended.',
  },
  {
    year: 'May 28, 1917',
    label: 'First Riot — Government Ignores It',
    color: '#b8860b',
    detail: 'A meeting of 3,000 white workers at City Hall turns violent. Mobs attack Black residents and storm streetcars. Governor Frank Lowden sends the National Guard, which restores a fragile order. The underlying conditions — employer-stoked racial tension, a growing Black population, and white worker resentment — remain completely unaddressed. Tensions simmer for five more weeks.',
  },
  {
    year: 'July 1, 1917 — Evening',
    label: 'The Night of the Car',
    color: '#c0392b',
    detail: 'A white-occupied Ford Model T drives through a Black neighborhood, firing shots into homes. Shortly after, an unmarked police car enters the area. Black residents — believing the attackers are returning — open fire on it, killing two detectives: Samuel Coppedge and Frank Wadley. The mob will use the deaths of these two white officers to justify what follows.',
  },
  {
    year: 'July 2, 1917 — The Massacre',
    label: '18 Hours of Terror',
    color: '#c0392b',
    detail: 'Thousands of white rioters gather around the bullet-riddled police car at dawn and march into Black neighborhoods. They burn over 300 homes and businesses. Residents who flee the fires are shot or beaten in the streets. Some are thrown back into burning buildings. Some are lynched. Bodies are thrown into the Mississippi River. Police officers and National Guard troops stand by, laugh, or participate. Fire trucks are blocked from responding.',
  },
  {
    year: 'July 3, 1917',
    label: 'Flight Across the Bridge',
    color: '#c0392b',
    detail: 'Thousands of Black refugees flee across the Eads Bridge into St. Louis, Missouri with whatever they could carry. Governor Lowden tours the smoldering ruins. The National Guard — which had already been present and done nothing — receives reinforcements. By the time order is restored, the Black community of East St. Louis has been effectively destroyed.',
  },
  {
    year: 'July 28, 1917',
    label: 'The Silent Parade',
    color: '#3c6e71',
    detail: 'The NAACP organizes the Silent Protest Parade in New York City. 10,000 Black citizens march down Fifth Avenue in complete silence. Children in white walk at the front. Women in white follow. Men in black bring up the rear. They carry signs: "Mr. President, why not make America safe for democracy?" W.E.B. Du Bois and the NAACP document the massacre in The Crisis. Marcus Garvey, radicalized by the event, rises to national prominence.',
  },
  {
    year: 'October 1917',
    label: 'Trials: Almost Nobody Punished',
    color: '#c0392b',
    detail: 'Trials are held for rioters and alleged instigators. A handful of white rioters receive prison sentences. Dr. LeRoy Bundy, a prominent Black dentist and civic leader who was a victim of the riots, is charged with inciting them — his conviction is eventually overturned. Congressman Leonidas Dyer introduces the Dyer Anti-Lynching Bill in direct response to the massacre. The Senate kills it through filibuster.',
  },
];

const facts = [
  { label: 'Date',       value: 'July 1–3, 1917',          detail: 'Peak of WWI, during the Great Migration north' },
  { label: 'Location',   value: 'East St. Louis, Illinois', detail: 'Just across the river from St. Louis, MO' },
  { label: 'Deaths',     value: '39–500+ Black residents',  detail: 'Official: 39. Congressman Dyer estimated 100–500. Many bodies in the Mississippi River.' },
  { label: 'Cause',      value: 'Labor + Race',             detail: 'Factory owners used Black workers as strikebreakers to break unions — deliberately stoking racial hatred' },
  { label: 'Displaced',  value: '10,000+ residents',        detail: 'Entire Black community fled; 300+ homes and businesses burned' },
  { label: 'Response',   value: 'The Silent Parade',        detail: '10,000 marched in silence in NYC — one of the first major civil rights demonstrations' },
];

const figures = [
  { name: 'Ida B. Wells-Barnett', role: 'Arrived July 4th to interview survivors. Published The East St. Louis Massacre: The Greatest Outrage of the Century.' },
  { name: 'W.E.B. Du Bois',      role: 'Investigated for the NAACP with Martha Gruening. Published harrowing documentation in The Crisis magazine.' },
  { name: 'Marcus Garvey',       role: 'Radicalized by the massacre. His July 8th speech on the East St. Louis killings launched him to national leadership.' },
  { name: 'Dr. LeRoy Bundy',     role: 'Prominent Black dentist and victim — charged with inciting the riots. His conviction was eventually overturned.' },
  { name: 'Leonidas Dyer',       role: 'U.S. Congressman who introduced the Dyer Anti-Lynching Bill directly in response. The Senate filibustered it to death.' },
  { name: 'Ed & Lena Cook',      role: 'A Black family pulled from a streetcar. Ed and their 14-year-old son were murdered in front of Lena.' },
];

export default function EastStLouis() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#080608', padding: 'clamp(4rem,10vw,8rem) clamp(1.5rem,5vw,4rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 70%, rgba(180,80,20,0.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 28, height: 3, background: '#c0392b', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#e05a3a' }}>East St. Louis, Illinois · July 1917</span>
              <div style={{ width: 28, height: 3, background: '#c0392b', borderRadius: 99 }} />
            </div>
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2.4rem,8vw,5.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.0, color: '#fff', marginBottom: 24 }}>
            East St. Louis<br /><span style={{ color: '#c0392b' }}>Massacre</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} style={{ color: 'rgba(255,255,255,0.52)', fontSize: 'clamp(0.95rem,1.8vw,1.1rem)', lineHeight: 1.78, maxWidth: '56ch', marginBottom: 28 }}>
            In 1917, factory owners deliberately used Black workers to break white labor unions — then watched as those same white workers massacred the Black community. The Great Migration had just begun. This is where it was met.
          </motion.p>
          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['East St. Louis, IL', 'July 1917', 'Labor + Race Terror', 'The Silent Parade'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)', fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 99 }}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <div style={{ background: '#0d0608', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.05rem,2.2vw,1.4rem)', fontStyle: 'italic', fontWeight: 500, color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, margin: 0 }}>
            "We march because we want to make impossible a repetition of Waco, Memphis, and East St. Louis by arousing the conscience of the country."
          </p>
          <div style={{ marginTop: 12, fontFamily: 'Roboto Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em' }}>
            — NAACP banner, Silent Protest Parade, New York City, July 28, 1917
          </div>
        </div>
      </div>

      {/* Facts */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#c0392b', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c0392b' }}>Key Facts</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 12 }}>
            {facts.map(f => (
              <div key={f.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px', boxShadow: '0 2px 8px rgba(53,53,53,0.05)' }}>
                <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.56rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c0392b', marginBottom: 6 }}>{f.label}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem', fontWeight: 900, color: '#353535', marginBottom: 5, letterSpacing: '-0.01em' }}>{f.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{f.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labor context */}
      <section style={{ background: '#fff', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>The Setup</span>
          </div>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.3rem,2.8vw,1.9rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#353535', lineHeight: 1.1, marginBottom: 16 }}>The Capitalist Trigger</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 14, maxWidth: '62ch' }}>
            The Aluminum Ore Company was facing a union strike. Management's solution was to import Black workers from the South to replace the striking white workers — a tactic management knew would destroy any chance of interracial labor solidarity and redirect white workers' anger away from their employers.
          </p>
          <div style={{ background: 'rgba(192,57,43,0.05)', border: '1.5px solid rgba(192,57,43,0.2)', borderRadius: 14, padding: '16px 20px' }}>
            <AlertTriangle size={15} color="#c0392b" style={{ marginBottom: 8 }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#353535', lineHeight: 1.7, margin: 0 }}>
              The Congressional investigation and eyewitness testimony confirmed that local police and National Guard members frequently stood by, laughed, or actively joined the mob in shooting Black residents. America was simultaneously declaring itself a defender of democracy in World War I Europe while massacring its own Black citizens at home.
            </p>
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
            <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, #3c6e71, #c0392b 30%, #c0392b 75%, #3c6e71)', borderRadius: 2 }} />
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
      <section style={{ background: 'var(--bg-elevated)', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>People to Remember</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
            {figures.map(f => (
              <div key={f.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', fontWeight: 800, color: '#353535', marginBottom: 6 }}>{f.name}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.62 }}>{f.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section style={{ background: '#080608', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Factory size={32} color="#c0392b" style={{ margin: '0 auto 24px' }} />
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
            They came north<br /><span style={{ color: '#c0392b' }}>looking for work.</span><br /><span style={{ color: '#3c6e71' }}>10,000 marched in silence.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 1.78, margin: '0 auto 36px', maxWidth: '46ch' }}>
            The Silent Parade was one of the first major civil rights demonstrations in American history. It was held because words felt inadequate. Because the country was at war for democracy abroad while enabling massacres at home.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/elaine-massacre')} style={{ background: '#3c6e71', color: '#fff', border: 'none', borderRadius: 12, padding: '0.9rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7 }} onMouseEnter={e => e.currentTarget.style.background = '#2a5255'} onMouseLeave={e => e.currentTarget.style.background = '#3c6e71'}>
              Elaine Massacre <ArrowRight size={15} />
            </button>
            <a href="https://en.wikipedia.org/wiki/East_St._Louis_massacre_of_1917" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: 'rgba(255,255,255,0.62)', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '0.9rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <ExternalLink size={14} /> Wikipedia Article
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
