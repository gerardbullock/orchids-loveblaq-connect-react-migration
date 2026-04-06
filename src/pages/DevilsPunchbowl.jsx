import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, AlertTriangle, BookOpen } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const timeline = [
  {
    year: 'July 1863',
    event: 'Fall of Vicksburg',
    detail: 'Union forces capture Vicksburg, Mississippi. Thousands of enslaved people seize the moment and flee to Union-occupied Natchez seeking freedom and protection. The city\'s population surges from roughly 10,000 to over 100,000 nearly overnight.',
  },
  {
    year: 'Late 1863',
    event: 'Contraband Camp Established',
    detail: 'The overwhelmed Union Army establishes "contraband camps" — refugee settlements for self-emancipated people. One camp is placed in the Devil\'s Punchbowl, a series of deep natural ravines carved into the Mississippi River bluffs. Approximately 4,000 refugees are confined there.',
  },
  {
    year: '1863–1865',
    event: 'Catastrophic Conditions',
    detail: 'Overcrowding, near-starvation, and outbreaks of smallpox and cholera kill hundreds — possibly thousands. James Yeatman of the Western Sanitary Commission writes to President Lincoln that "seventy-five died in a single day." Residents are required to labor in exchange for meager rations. Movement is controlled by the Union Army.',
  },
  {
    year: '1863–1865',
    event: 'Mass Deaths & Unmarked Burials',
    detail: 'The scale of death outpaces any organized burial effort. Bodies are interred where they fall. Some Union soldiers — including members of the United States Colored Troops — are later reinterred in Natchez National Cemetery. The freedpeople who died in the ravines are not. Their remains have periodically washed up along the riverbank during Mississippi floods.',
  },
  {
    year: 'Today',
    event: 'No Marker. No Recognition.',
    detail: 'The Devil\'s Punchbowl remains a series of steep, overgrown ravines. There is no official state historical marker. Local activists including Clifford Boxley and organizations like the Forks of the Road project have pushed for formal recognition — so far without success.',
  },
];

const facts = [
  {
    label: 'Location',
    value: 'Natchez, Mississippi',
    detail: 'Natural ravines cut into the bluffs above the Mississippi River',
  },
  {
    label: 'Period',
    value: '1863 – 1865',
    detail: 'During and immediately after Union occupation of Natchez',
  },
  {
    label: 'Population',
    value: '~4,000',
    detail: 'Documented refugees in the camp at peak, per historian Ronald Davis',
  },
  {
    label: 'Deaths',
    value: '1,000 – 2,000',
    detail: 'Estimated by historians. Viral claims of 20,000 are not supported by primary sources',
  },
  {
    label: 'Marker Today',
    value: 'None',
    detail: 'No official state or federal historical marker exists at the site',
  },
];

export default function DevilsPunchbowl() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{
        background: '#0d0d0d',
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Subtle red glow — danger, blood */}
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(150,30,30,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 28, height: 3, background: '#3c6e71', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4d8c90' }}>
                Natchez, Mississippi · 1863
              </span>
              <div style={{ width: 28, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            </div>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(2rem, 7vw, 5rem)',
            fontWeight: 900, letterSpacing: '-0.03em',
            lineHeight: 1.0, color: '#fff', marginBottom: 24,
          }}>
            The Devil's<br />Punchbowl
          </motion.h1>

          <motion.p {...fadeUp(0.2)} style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            lineHeight: 1.78, maxWidth: '52ch', margin: '0 auto 32px',
          }}>
            In 1863, thousands of people who had just freed themselves from slavery
            were funneled into a ravine above the Mississippi River by the Union Army.
            Many never came back out.
          </motion.p>

          {/* Fact pills */}
          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            {['Natchez, MS', '1863–1865', 'No Memorial Exists'].map(tag => (
              <span key={tag} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'Roboto Mono, monospace',
                fontSize: '0.6rem', fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '6px 14px', borderRadius: 99,
              }}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Opening statement ─────────────────────────────── */}
      <div style={{
        background: '#1a0a0a',
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)',
            fontStyle: 'italic', fontWeight: 500,
            color: 'rgba(255,255,255,0.82)', lineHeight: 1.75, margin: 0,
          }}>
            "Seventy-five died in a single day."
          </p>
          <div style={{ marginTop: 12, fontFamily: 'Roboto Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
            — James Yeatman, Western Sanitary Commission, in a letter to President Lincoln, 1863
          </div>
        </div>
      </div>

      {/* ── Fast facts ────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>Key Facts</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14 }}>
            {facts.map(f => (
              <div key={f.label} style={{
                background: '#fff', border: '1px solid var(--border)',
                borderRadius: 14, padding: '16px 18px',
                boxShadow: '0 2px 8px rgba(53,53,53,0.05)',
              }}>
                <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.56rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3c6e71', marginBottom: 6 }}>{f.label}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem', fontWeight: 900, color: '#353535', marginBottom: 5, letterSpacing: '-0.01em' }}>{f.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{f.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg-elevated)',
        padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>What Happened</span>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, #3c6e71, rgba(60,110,113,0.1))', borderRadius: 2 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'flex', gap: 20 }}
                >
                  {/* Dot */}
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                    background: i === timeline.length - 1 ? '#c0392b' : '#3c6e71',
                    border: '3px solid var(--bg-elevated)',
                    boxShadow: `0 0 0 2px ${i === timeline.length - 1 ? '#c0392b' : '#3c6e71'}22`,
                    marginTop: 2,
                  }} />

                  <div style={{ flex: 1, paddingBottom: i < timeline.length - 1 ? 0 : 0 }}>
                    <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3c6e71', marginBottom: 4 }}>
                      {item.year}
                    </div>
                    <h3 style={{
                      fontFamily: 'Montserrat, sans-serif', fontSize: '1rem',
                      fontWeight: 800, letterSpacing: '-0.015em',
                      color: '#353535', lineHeight: 1.2, marginBottom: 8,
                    }}>
                      {item.event}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.72, margin: 0 }}>
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Historical record note ────────────────────────── */}
      <section style={{
        background: '#fff',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{
            background: 'rgba(40,75,99,0.05)',
            border: '1.5px solid rgba(40,75,99,0.18)',
            borderRadius: 14, padding: '20px 22px',
            display: 'flex', gap: 14, alignItems: 'flex-start',
            marginBottom: 28,
          }}>
            <AlertTriangle size={18} color="#284b63" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 800, color: '#284b63', marginBottom: 6 }}>On the Historical Record</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#353535', lineHeight: 1.7, margin: 0 }}>
                Viral accounts claim 20,000 deaths in a single year. Historians including Ronald Davis
                (<em>The Black Experience in Natchez</em>, 1993) estimate 1,000–2,000 deaths based on
                primary sources. The suffering was real and catastrophic. The precise numbers are disputed.
                Both things are true: the historical record is incomplete, and what happened was a
                preventable atrocity.
              </p>
            </div>
          </div>

          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(1.3rem, 2.8vw, 1.9rem)',
            fontWeight: 900, letterSpacing: '-0.02em',
            color: '#353535', lineHeight: 1.1, marginBottom: 16,
          }}>
            Why It Matters
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 16, maxWidth: '60ch' }}>
            The people who died in the Devil's Punchbowl had just freed themselves. They walked
            toward Union lines not to be imprisoned again, but because they believed the promise
            of freedom. What they found was a ravine, disease, forced labor, and mass death —
            administered not by their former enslaver but by the government claiming to liberate them.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 0, maxWidth: '60ch' }}>
            There is still no historical marker at the site. The bones of some of those who died
            have been uncovered by Mississippi River floods over the decades. The peach trees that
            locals refuse to eat fruit from still grow in the ravines. The overgrown bluffs above
            the river are the only monument these people have ever received.
          </p>
        </div>
      </section>

      {/* ── Closing ───────────────────────────────────────── */}
      <section style={{
        background: '#0d0d0d',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)',
            fontWeight: 900, letterSpacing: '-0.025em',
            color: '#fff', lineHeight: 1.1, marginBottom: 20,
          }}>
            They freed themselves.<br />
            <span style={{ color: '#3c6e71' }}>The system failed them.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.78, margin: '0 auto 36px', maxWidth: '46ch' }}>
            Saying their names, learning this history, and pushing for a marker at this site
            are acts of resistance against erasure.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/drowned-towns')}
              style={{
                background: '#3c6e71', color: '#fff', border: 'none',
                borderRadius: 12, padding: '0.9rem 2rem',
                fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem',
                fontWeight: 700, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 7,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#2a5255'}
              onMouseLeave={e => e.currentTarget.style.background = '#3c6e71'}
            >
              Drowned Towns <ArrowRight size={15} />
            </button>
            <a
              href="https://en.wikipedia.org/wiki/Devil%27s_Punchbowl_(Natchez,_Mississippi)"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent', color: 'rgba(255,255,255,0.65)',
                border: '1.5px solid rgba(255,255,255,0.15)',
                borderRadius: 12, padding: '0.9rem 2rem',
                fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem',
                fontWeight: 600, cursor: 'pointer', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 7,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#3c6e71'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
            >
              <ExternalLink size={14} /> Wikipedia Article
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
