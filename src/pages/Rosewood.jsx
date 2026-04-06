import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, AlertTriangle, Flame } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const timeline = [
  {
    year: 'January 1, 1923',
    event: 'A False Accusation',
    detail: 'Fannie Taylor, a white woman in nearby Sumner, claimed she had been assaulted by an unidentified Black man. Investigators and neighbors later suspected the attacker was a white man she had been seeing. Her accusation was the spark that ignited a week of terror. Sheriff Robert Walker organized a posse and the search began.',
  },
  {
    year: 'January 2, 1923',
    event: 'Sam Carter Lynched',
    detail: 'Tracking dogs led the mob to Sam Carter, a Black blacksmith. He was tortured and lynched. His body was mutilated and left on display. Aaron Carrier, another Black resident, was taken into "protective custody" by the Sheriff — not to be charged, but to prevent the mob from killing him before a pretense of justice could be maintained.',
  },
  {
    year: 'January 4, 1923',
    event: 'The Carrier House Siege',
    detail: 'A mob of over 100 white men surrounded the home of Sarah Carrier, a respected community elder. When they broke in, her son Sylvester — known as "Man" — led an armed defense. Sarah Carrier and Sylvester were both killed. Two white attackers also died. The armed resistance infuriated the mob and escalated the violence.',
  },
  {
    year: 'January 5, 1923',
    event: 'The Mob Grows — Governor Does Nothing',
    detail: 'The mob swelled to 200–300 men, many arriving by car from neighboring counties. Lexie Gordon and Mingo Williams were murdered. Black residents fled into the surrounding swamps to survive. Governor Cary Hardee received urgent requests for National Guard intervention. He declined to send troops.',
  },
  {
    year: 'January 6–7, 1923',
    event: 'Rosewood Burned to the Ground',
    detail: 'Two white train conductors — John and William Bryce — defied the mob and evacuated Black women and children by train to Gainesville. By January 7th, every remaining structure in Rosewood had been set on fire and destroyed. The town ceased to exist. No one was ever charged.',
  },
  {
    year: 'February 1923',
    event: 'Grand Jury: "Insufficient Evidence"',
    detail: 'A grand jury was convened. After reviewing events in which hundreds of white men participated in murder and arson, it found "insufficient evidence" to indict anyone. No arrests were made. No prosecutions followed. The survivors scattered. For decades, many refused to speak publicly about what happened.',
  },
  {
    year: '1994',
    event: 'Florida Acknowledges — 71 Years Later',
    detail: 'After decades of survivor testimony and a 1993 investigative report commissioned by the Florida legislature, Governor Lawton Chiles signed the Rosewood Claims Bill — the first time an American state government compensated victims of a racial massacre. Nine verified survivors received $150,000 each. Descendants of property owners shared a $500,000 pool. A scholarship fund was established for descendants.',
  },
];

const facts = [
  {
    label: 'Location',
    value: 'Rosewood, Florida',
    detail: 'Levy County, roughly 50 miles west of Gainesville',
  },
  {
    label: 'Date',
    value: 'Jan 1–7, 1923',
    detail: 'Seven days of racially motivated violence and arson',
  },
  {
    label: 'Trigger',
    value: 'False Accusation',
    detail: 'A white woman\'s unverified claim — later suspected to be a cover for a secret relationship',
  },
  {
    label: 'Deaths',
    value: '8 – 150+',
    detail: 'Official count: 8 (6 Black, 2 white). Historian estimates range from 27 to 150+',
  },
  {
    label: 'Prosecutions',
    value: 'Zero',
    detail: 'No one was ever charged for the murders or destruction',
  },
  {
    label: 'Reparations',
    value: '$2.1 Million (1994)',
    detail: 'Florida\'s 1994 Rosewood Claims Bill — a landmark but long-delayed acknowledgment',
  },
];

export default function Rosewood() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{
        background: '#0d0a08',
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Fire glow */}
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 340, background: 'radial-gradient(ellipse at bottom, rgba(180,60,10,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 300, height: 300, background: 'radial-gradient(ellipse, rgba(160,40,10,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 28, height: 3, background: '#c0392b', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#e05a3a' }}>
                Levy County, Florida · January 1923
              </span>
              <div style={{ width: 28, height: 3, background: '#c0392b', borderRadius: 99 }} />
            </div>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(2.4rem, 8vw, 5.5rem)',
            fontWeight: 900, letterSpacing: '-0.03em',
            lineHeight: 1.0, color: '#fff', marginBottom: 24,
          }}>
            The Rosewood<br />Massacre
          </motion.h1>

          <motion.p {...fadeUp(0.2)} style={{
            color: 'rgba(255,255,255,0.58)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            lineHeight: 1.78, maxWidth: '54ch', margin: '0 auto 32px',
          }}>
            In January 1923, a prosperous Black town in Florida was destroyed
            in seven days by white mobs. Every home was burned. Survivors fled
            into the swamp. No one was ever charged.
          </motion.p>

          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            {['Rosewood, FL', 'January 1923', '0 Prosecutions'].map(tag => (
              <span key={tag} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.65)',
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
        background: '#1a0a05',
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)',
            fontStyle: 'italic', fontWeight: 500,
            color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, margin: 0,
          }}>
            "They came back and everything was gone. The houses, the church, the school —
            everything burned down to the ground. There was nothing left."
          </p>
          <div style={{ marginTop: 12, fontFamily: 'Roboto Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em' }}>
            — Survivor testimony, Rosewood, Florida, 1923
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 14 }}>
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

      {/* ── What was Rosewood ─────────────────────────────── */}
      <section style={{
        background: 'var(--bg-elevated)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>Before</span>
          </div>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(1.3rem, 2.8vw, 1.9rem)',
            fontWeight: 900, letterSpacing: '-0.02em',
            color: '#353535', lineHeight: 1.1, marginBottom: 16,
          }}>
            What Rosewood Was
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 14, maxWidth: '62ch' }}>
            In 1920, Rosewood was a self-sufficient Black community of roughly 350 people
            in Levy County, Florida. Residents owned land, ran businesses, attended church,
            and sent their children to school. Many were skilled tradespeople — carpenters,
            turpentine workers, blacksmiths. The community's relative prosperity stood in
            sharp contrast to the neighboring white town of Sumner.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 0, maxWidth: '62ch' }}>
            That prosperity made Rosewood a target. What one false accusation ignited,
            racial jealousy and the complete failure of law enforcement made permanent.
          </p>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)',
        padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>Seven Days</span>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, #c0392b, rgba(192,57,43,0.08))', borderRadius: 2 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'flex', gap: 20 }}
                >
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                    background: i === timeline.length - 1 ? '#3c6e71' : '#c0392b',
                    border: '3px solid var(--bg)',
                    boxShadow: `0 0 0 2px ${i === timeline.length - 1 ? '#3c6e7122' : '#c0392b22'}`,
                    marginTop: 2,
                  }} />

                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: i === timeline.length - 1 ? '#3c6e71' : '#c0392b', marginBottom: 4 }}>
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

      {/* ── Historical note + Why It Matters ──────────────── */}
      <section style={{
        background: '#fff',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{
            background: 'rgba(192,57,43,0.05)',
            border: '1.5px solid rgba(192,57,43,0.2)',
            borderRadius: 14, padding: '20px 22px',
            display: 'flex', gap: 14, alignItems: 'flex-start',
            marginBottom: 32,
          }}>
            <AlertTriangle size={18} color="#c0392b" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 800, color: '#c0392b', marginBottom: 6 }}>On the Death Toll</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#353535', lineHeight: 1.7, margin: 0 }}>
                The official 1923 count recorded 8 deaths (6 Black, 2 white). Historian
                estimates based on survivor testimony and investigation range from 27 to over 150.
                Survivors described mass burials and bodies in the swamp that were never officially
                documented. The true number will never be known — a direct result of the
                state's failure to investigate at the time.
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
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 14, maxWidth: '62ch' }}>
            Rosewood was not a riot. It was not chaos. It was a deliberate, organized
            destruction of a Black community by white mobs operating with the knowledge
            and complicity of local law enforcement. The Sheriff organized the initial
            posse. The Governor refused to send help. A grand jury looked at overwhelming
            evidence and charged no one.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 14, maxWidth: '62ch' }}>
            Survivors spent decades in silence — some from trauma, many from fear.
            The story was buried until the 1980s, when descendants like Arnett Doctor
            began pushing for acknowledgment. Florida's 1994 reparations bill was the
            first of its kind in the United States — but it came 71 years late and
            reached only nine verified survivors.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 0, maxWidth: '62ch' }}>
            The site of Rosewood — where homes, a church, a school, and a community
            once stood — is today a quiet stretch of rural Florida. There is a historical
            marker. The land remains. Nothing was rebuilt.
          </p>
        </div>
      </section>

      {/* ── People to Remember ────────────────────────────── */}
      <section style={{
        background: 'var(--bg-elevated)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>People to Remember</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 14 }}>
            {[
              { name: 'Sam Carter', role: 'Blacksmith. Tortured and lynched January 2nd — the first victim.' },
              { name: 'Sarah Carrier', role: 'Community elder. Killed defending her home during the January 4th siege.' },
              { name: 'Sylvester Carrier', role: 'Led the armed defense of the Carrier house. Killed January 4th.' },
              { name: 'Lexie Gordon', role: 'Murdered January 5th as the mob expanded its violence through the town.' },
              { name: 'John Wright', role: 'The white general store owner who sheltered Black survivors at great personal risk.' },
              { name: 'Arnett Doctor', role: 'Rosewood descendant who led the decades-long fight for recognition and reparations.' },
            ].map(p => (
              <div key={p.name} style={{
                background: '#fff', border: '1px solid var(--border)',
                borderRadius: 14, padding: '16px 18px',
                boxShadow: '0 2px 8px rgba(53,53,53,0.04)',
              }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', fontWeight: 800, color: '#353535', marginBottom: 6 }}>{p.name}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ───────────────────────────────────────── */}
      <section style={{
        background: '#0d0a08',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Flame size={32} color="#c0392b" style={{ margin: '0 auto 24px' }} />
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)',
            fontWeight: 900, letterSpacing: '-0.025em',
            color: '#fff', lineHeight: 1.1, marginBottom: 20,
          }}>
            They built it.<br />
            <span style={{ color: '#c0392b' }}>The mob burned it down.</span><br />
            <span style={{ color: '#3c6e71' }}>We still say their names.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.78, margin: '0 auto 36px', maxWidth: '46ch' }}>
            Florida's 1994 reparations bill was the first in U.S. history. It took
            71 years, 9 survivors, and a generation of descendants demanding
            acknowledgment to make it happen.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/devils-punchbowl')}
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
              Devil's Punchbowl <ArrowRight size={15} />
            </button>
            <a
              href="https://en.wikipedia.org/wiki/Rosewood_massacre"
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
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#c0392b'; e.currentTarget.style.color = '#fff'; }}
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
