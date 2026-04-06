import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, AlertTriangle, Vote } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const timeline = [
  {
    year: 'October 1920',
    label: 'The KKK Warns Them Not to Vote',
    color: '#c0392b',
    detail: 'In the weeks before the November 2nd presidential election, the Ku Klux Klan conducts intimidation marches in Orlando and Jacksonville. The message to Black voters is clear: do not show up. In Ocoee, Florida, Black community leader July Perry and others are working to register Black voters and get them to the polls — a campaign they are running at real personal risk.',
  },
  {
    year: 'November 2, 1920 — Morning',
    label: 'Mose Norman Tries to Vote. Twice.',
    color: '#c0392b',
    detail: 'Mose Norman arrives at Precinct 10 in Ocoee to vote. Poll workers challenge his registration and turn him away — one of many Black voters being denied that morning through selective "challenges" and manufactured obstacles. Norman consults Judge John Cheney, a Republican candidate who supports Black voting rights. He returns to try again. He is assaulted and flees to the home of July Perry.',
  },
  {
    year: 'November 2, 1920 — Evening',
    label: 'The Posse Comes for Perry',
    color: '#c0392b',
    detail: 'A white posse, deputized by Orange County law enforcement, surrounds July Perry\'s home looking for Norman. Perry and the men inside refuse to surrender. A shootout erupts. Two white men — Leo Borgard and Elmer McDaniels — are killed. Perry is wounded and captured. Later evidence suggests the two white men were likely killed by crossfire from their own side, not by Perry\'s defenders.',
  },
  {
    year: 'November 3, 1920 — Night',
    label: 'Reinforcements Arrive from Orlando',
    color: '#c0392b',
    detail: 'Armed white men pour in from Orlando and Winter Garden through the night. From 1:00 AM to dawn, they burn the "Northern Quarters" — the Black residential neighborhood of Ocoee. Twenty-five or more homes, two churches, and a lodge are destroyed. An estimated 30 to 80 Black residents are killed. Most bodies are never officially recorded.',
  },
  {
    year: 'November 3, 1920 — Dawn',
    label: 'July Perry Is Lynched',
    color: '#c0392b',
    detail: 'July Perry is taken from jail, lynched, and hung from a light post near Judge Cheney\'s home in Orlando. He had done nothing but refuse to allow armed men to enter his home. He was trying to protect a man who had tried to vote. No one is charged with his murder.',
  },
  {
    year: '1920–1921',
    label: 'The Purge: Ocoee Goes White',
    color: '#c0392b',
    detail: 'Remaining Black residents of Ocoee are threatened at gunpoint into selling their land for pennies and leaving permanently. Property worth an estimated $10 million in today\'s value is stripped away. Ocoee becomes a "sundown town" — a community where Black people are forbidden to be present after dark. The Black community of Ocoee will not return for over 60 years.',
  },
  {
    year: '2020',
    label: 'Florida Makes It Mandatory Curriculum',
    color: '#3c6e71',
    detail: 'Florida passes House Bill 1213, making instruction on the Ocoee Massacre mandatory in K–12 schools as part of African American history education. The same year, the 100th anniversary is marked with public ceremonies. The massacre — which occurred on Election Day — is now formally recognized as the deadliest act of Election Day violence in United States history.',
  },
];

const facts = [
  { label: 'Date',       value: 'November 2–3, 1920',    detail: 'Election Day — the deadliest in U.S. history' },
  { label: 'Location',   value: 'Ocoee, Florida',         detail: 'Orange County — just outside Orlando' },
  { label: 'Cause',      value: 'Trying to Vote',         detail: 'Black residents were attacked for attempting to cast ballots in a presidential election' },
  { label: 'Deaths',     value: '30–80 Black residents',  detail: 'Official 1920 report: 6 total. NAACP: 30+. Historians: up to 80. Most unrecorded.' },
  { label: 'Displaced',  value: '250+ residents',         detail: 'Entire Black community forced out; Ocoee became a sundown town for 60+ years' },
  { label: 'Prosecutions', value: 'Zero',                 detail: 'July Perry was lynched from a lamp post. No one was ever charged.' },
];

const figures = [
  { name: 'Mose Norman',   role: 'Tried to vote twice on November 2nd. Was turned away both times. His second attempt triggered the violence. He escaped.' },
  { name: 'July Perry',    role: 'Community leader who sheltered Norman. Wounded in the siege of his home. Taken from jail and lynched at dawn.' },
  { name: 'Judge John Cheney', role: 'White Republican candidate who supported Black voting rights and advised Norman. One of the few white figures who aided Black voters.' },
  { name: 'Sam Salisbury', role: 'Former police chief who helped lead the white mob. Was wounded in the shootout. Never charged.' },
  { name: 'Walter White',  role: 'NAACP investigator who documented the massacre and estimated 30 Black deaths — far above the official count.' },
  { name: 'The Unnamed',   role: 'Most victims were never officially recorded. The true death toll — and the names of those who died — remain partially unknown.' },
];

export default function OcoeeMassacre() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#070608', padding: 'clamp(4rem,10vw,8rem) clamp(1.5rem,5vw,4rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 40% 60%, rgba(40,75,100,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 28, height: 3, background: '#284b63', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5a8fa8' }}>Ocoee, Florida · November 2, 1920 · Election Day</span>
              <div style={{ width: 28, height: 3, background: '#284b63', borderRadius: 99 }} />
            </div>
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2.4rem,8vw,5.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.0, color: '#fff', marginBottom: 24 }}>
            The Ocoee<br /><span style={{ color: '#5a8fa8' }}>Massacre</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} style={{ color: 'rgba(255,255,255,0.52)', fontSize: 'clamp(0.95rem,1.8vw,1.1rem)', lineHeight: 1.78, maxWidth: '56ch', marginBottom: 28 }}>
            On Election Day 1920, a Black man in Ocoee, Florida tried to vote. A white mob burned his neighborhood, killed up to 80 residents, and lynched a community leader. It is the deadliest act of Election Day violence in American history.
          </motion.p>
          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Ocoee, FL', 'Election Day 1920', 'For Trying to Vote', '0 Prosecutions'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)', fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 99 }}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <div style={{ background: '#0c0b0e', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.05rem,2.2vw,1.4rem)', fontStyle: 'italic', fontWeight: 500, color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, margin: 0 }}>
            "July Perry had committed no crime. He had sheltered a man who had tried to exercise his constitutional right to vote. For that, they came for him in the night, took him from his cell, and hanged him."
          </p>
          <div style={{ marginTop: 12, fontFamily: 'Roboto Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em' }}>
            — Historical record, Ocoee, Florida, 1920
          </div>
        </div>
      </div>

      {/* Facts */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#5a8fa8', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5a8fa8' }}>Key Facts</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 12 }}>
            {facts.map(f => (
              <div key={f.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px', boxShadow: '0 2px 8px rgba(53,53,53,0.05)' }}>
                <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.56rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5a8fa8', marginBottom: 6 }}>{f.label}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem', fontWeight: 900, color: '#353535', marginBottom: 5, letterSpacing: '-0.01em' }}>{f.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{f.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voter suppression callout */}
      <section style={{ background: 'var(--bg-elevated)', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ background: 'rgba(192,57,43,0.05)', border: '1.5px solid rgba(192,57,43,0.2)', borderRadius: 14, padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <AlertTriangle size={18} color="#c0392b" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 800, color: '#c0392b', marginBottom: 6 }}>The Cost of a Vote</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#353535', lineHeight: 1.7, margin: 0 }}>
                The 19th Amendment had just been ratified in 1920, giving women the right to vote. Black women and men were legally entitled to vote under the 15th Amendment since 1870. In Ocoee — and across the South — that right was enforced with poll taxes, literacy tests, white supremacist intimidation, and, when all else failed, massacre. The Ocoee Massacre is the most extreme example of what happens when Black people try to vote in a system designed to stop them. But it was not the only example. It was part of a systematic pattern.
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
      <section style={{ background: '#070608', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Vote size={32} color="#5a8fa8" style={{ margin: '0 auto 24px' }} />
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
            He tried to vote.<br /><span style={{ color: '#c0392b' }}>They burned his town down.</span><br /><span style={{ color: '#5a8fa8' }}>It's now mandatory curriculum.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 1.78, margin: '0 auto 36px', maxWidth: '46ch' }}>
            Florida's 2020 law mandating instruction on the Ocoee Massacre came exactly 100 years after the events. The Black community of Ocoee did not return for more than six decades.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/rosewood')} style={{ background: '#3c6e71', color: '#fff', border: 'none', borderRadius: 12, padding: '0.9rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7 }} onMouseEnter={e => e.currentTarget.style.background = '#2a5255'} onMouseLeave={e => e.currentTarget.style.background = '#3c6e71'}>
              Rosewood Massacre <ArrowRight size={15} />
            </button>
            <a href="https://en.wikipedia.org/wiki/Ocoee_massacre" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: 'rgba(255,255,255,0.62)', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '0.9rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <ExternalLink size={14} /> Wikipedia Article
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
