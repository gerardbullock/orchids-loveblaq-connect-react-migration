import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, AlertTriangle, Newspaper } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const timeline = [
  {
    year: 'Summer 1906',
    label: 'The Newspapers Build the Mob',
    color: '#c0392b',
    detail: 'Atlanta\'s white-owned newspapers — the Atlanta Journal and Atlanta Constitution — are locked in a circulation war. Both editors, Hoke Smith and Clark Howell, are also candidates for governor. They discover that printing sensational, unverified reports of Black men attacking white women sells papers and wins votes. Through the summer, they publish headline after headline of alleged assaults. Most are fabricated or exaggerated. The mob they are building is patient. It is waiting for the right moment.',
  },
  {
    year: 'September 21, 1906',
    label: 'Four "Extra" Editions in One Day',
    color: '#c0392b',
    detail: 'On September 21st alone, Atlanta newspapers publish four "extra" editions announcing four alleged assaults of white women by Black men. None are verified. The city\'s white population is at peak hysteria. A play called "The Clansman" — which romanticizes the KKK and depicts Black men as predators — has recently completed a run in Atlanta, further inflaming the audience.',
  },
  {
    year: 'September 22, 1906 — Evening',
    label: 'Five Points Ignites',
    color: '#c0392b',
    detail: 'Between 10,000 and 15,000 white men and boys gather at Five Points in downtown Atlanta. At 9:00 PM, violence erupts. Mobs storm Black-owned barbershops and businesses on Decatur Street. Black passengers are dragged off streetcars and beaten. Black workers are chased and killed on downtown streets. Alonzo Herndon, Atlanta\'s first Black millionaire, watches his Crystal Palace barbershop — staffed by well-dressed Black barbers serving white clientele — destroyed.',
  },
  {
    year: 'September 23, 1906',
    label: 'The Governor Calls the Guard — Too Late',
    color: '#c0392b',
    detail: 'Governor Joseph Terrell calls in the Georgia National Guard at midnight. Heavy rain at 2:00 AM disperses most of the main mob. But violence continues in residential areas throughout the day. Black residents who attempted to defend themselves or their property are targeted. Sporadic killings continue across the city.',
  },
  {
    year: 'September 24, 1906',
    label: 'Brownsville Fights Back — and Is Disarmed',
    color: '#c0392b',
    detail: 'Black residents in the Brownsville community near Clark University arm themselves for self-defense. Police raid the community. A shootout erupts, killing officer James Heard. The state militia responds by arresting and disarming over 250 Black men in Brownsville — including university professors. No white rioters are arrested for the murders committed over the preceding two days.',
  },
  {
    year: 'Post-1906',
    label: 'The Political Aftermath',
    color: '#b8860b',
    detail: 'Hoke Smith wins the governorship on his white supremacy platform and signs constitutional amendments imposing literacy tests for voting — effectively ending Black political participation in Georgia for 60 years. The massacre accelerates residential segregation and pushes the Black business community from downtown to the "Sweet Auburn" district. The failure of Booker T. Washington\'s accommodationist approach is now undeniable.',
  },
  {
    year: '1909',
    label: 'The NAACP Is Founded',
    color: '#3c6e71',
    detail: 'The Atlanta Massacre and a series of other atrocities directly catalyze the founding of the NAACP in 1909. W.E.B. Du Bois, who had armed himself with a shotgun to defend his family during the Atlanta killings, becomes one of the founders. A 13-year-old witness named Walter White is so transformed by what he saw in Atlanta that he devotes his life to civil rights, eventually becoming executive secretary of the NAACP.',
  },
];

const facts = [
  { label: 'Date',       value: 'Sept 22–25, 1906',       detail: 'Four days of organized mob violence in Atlanta' },
  { label: 'Location',   value: 'Atlanta, Georgia',         detail: 'Downtown and residential neighborhoods — "the New South"' },
  { label: 'Deaths',     value: '25–250+ Black residents',  detail: 'Official: ~25. Modern estimates: up to 250. Many buried in unmarked graves.' },
  { label: 'Trigger',    value: 'Yellow Journalism',        detail: 'Newspapers published 4 extra editions in one day with fabricated assault allegations' },
  { label: 'Prosecution', value: 'Only Black defenders',    detail: '250+ Black men arrested for arming themselves for self-defense. Zero white rioters charged for murder.' },
  { label: 'Legacy',     value: 'NAACP Founded (1909)',     detail: 'The massacre directly contributed to the founding of the NAACP three years later' },
];

const figures = [
  { name: 'W.E.B. Du Bois',   role: 'Atlanta University professor. Bought a double-barreled shotgun to defend his family. Wrote "The Litany of Atlanta." Co-founded the NAACP in 1909.' },
  { name: 'Alonzo Herndon',   role: 'Atlanta\'s first Black millionaire. Owned the Crystal Palace barbershop. His business was among the first destroyed on September 22nd.' },
  { name: 'Walter White',     role: 'Was 13 years old during the massacre. The trauma transformed him. He became executive secretary of the NAACP and led the fight against lynching for decades.' },
  { name: 'Hoke Smith',       role: 'Atlanta Journal editor and gubernatorial candidate. Used fabricated reports of Black crime to win the election. Then stripped Black voters of the right to vote.' },
  { name: 'Frank Smith',      role: 'A Western Union messenger chased and killed by a mob on the Forsyth Street Bridge. One of the documented victims.' },
  { name: 'Annie Shepard',    role: 'A 15-year-old girl. Listed in South-View Cemetery burial records as a victim of the "riot." Her story was never told.' },
];

export default function AtlantaMassacre() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#080606', padding: 'clamp(4rem,10vw,8rem) clamp(1.5rem,5vw,4rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 55% 55%, rgba(160,30,30,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 28, height: 3, background: '#c0392b', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#e05a3a' }}>Atlanta, Georgia · September 22–25, 1906</span>
              <div style={{ width: 28, height: 3, background: '#c0392b', borderRadius: 99 }} />
            </div>
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2.4rem,8vw,5.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.0, color: '#fff', marginBottom: 24 }}>
            The Atlanta<br /><span style={{ color: '#c0392b' }}>Massacre</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} style={{ color: 'rgba(255,255,255,0.52)', fontSize: 'clamp(0.95rem,1.8vw,1.1rem)', lineHeight: 1.78, maxWidth: '56ch', marginBottom: 28 }}>
            In 1906, Atlanta's newspapers spent a summer publishing fabricated stories of Black men attacking white women. Then the mob they had been building arrived — and a 13-year-old boy named Walter White watched it burn his city. He spent the rest of his life fighting back.
          </motion.p>
          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Atlanta, GA', 'September 1906', 'Press-Stoked Terror', 'NAACP Founded 1909'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)', fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 99 }}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <div style={{ background: '#0e0808', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.05rem,2.2vw,1.4rem)', fontStyle: 'italic', fontWeight: 500, color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, margin: 0 }}>
            "I was in my room when I heard the roar of a crowd coming down the street. I picked up the double-barreled shotgun and kept watch. I knew then that I would never let them take me without a fight."
          </p>
          <div style={{ marginTop: 12, fontFamily: 'Roboto Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em' }}>
            — W.E.B. Du Bois, September 22, 1906 — co-founder of the NAACP, 1909
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

      {/* Press callout */}
      <section style={{ background: 'var(--bg-elevated)', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ background: 'rgba(192,57,43,0.05)', border: '1.5px solid rgba(192,57,43,0.2)', borderRadius: 14, padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <AlertTriangle size={18} color="#c0392b" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 800, color: '#c0392b', marginBottom: 6 }}>The Press Built the Mob</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#353535', lineHeight: 1.7, margin: 0 }}>
                The Atlanta Journal and Atlanta Constitution published fabricated and exaggerated reports of Black men assaulting white women throughout the summer of 1906. On September 22nd alone, they published four separate "extra" editions detailing four alleged assaults — none of them verified. The editors were also competing for governor. The mob that assembled that evening at Five Points was not spontaneous. It had been months in the making, assembled through the deliberate use of the press as a weapon of racial terror.
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
            <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, #c0392b, #c0392b 80%, #3c6e71)', borderRadius: 2 }} />
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
      <section style={{ background: '#080606', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Newspaper size={32} color="#c0392b" style={{ margin: '0 auto 24px' }} />
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
            The newspapers built the mob.<br /><span style={{ color: '#c0392b' }}>The mob burned the city.</span><br /><span style={{ color: '#3c6e71' }}>A 13-year-old boy took notes.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 1.78, margin: '0 auto 36px', maxWidth: '46ch' }}>
            Walter White saw the Atlanta Massacre as a boy and spent his life ensuring it would never be forgotten or repeated. The NAACP — born from these ashes — became the spine of the Civil Rights Movement.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/east-st-louis')} style={{ background: '#3c6e71', color: '#fff', border: 'none', borderRadius: 12, padding: '0.9rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7 }} onMouseEnter={e => e.currentTarget.style.background = '#2a5255'} onMouseLeave={e => e.currentTarget.style.background = '#3c6e71'}>
              East St. Louis Massacre <ArrowRight size={15} />
            </button>
            <a href="https://en.wikipedia.org/wiki/Atlanta_massacre_of_1906" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: 'rgba(255,255,255,0.62)', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '0.9rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <ExternalLink size={14} /> Wikipedia Article
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
