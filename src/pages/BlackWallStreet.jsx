import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, AlertTriangle, Building2 } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const timeline = [
  {
    year: '1906–1920',
    label: 'Black Wall Street Is Built',
    color: '#3c6e71',
    detail:
      'O.W. Gurley purchases 40 acres and founds the Greenwood District in Tulsa, Oklahoma. Within 15 years it grows into the wealthiest Black community in the United States — over 100 businesses, law offices, hotels, a hospital, a library, 12 churches, and two newspapers. Booker T. Washington visits and calls it "Black Wall Street." The Stradford Hotel is one of the finest hotels in the state, regardless of race.',
  },
  {
    year: 'May 30, 1921',
    label: 'The Lie That Started It All',
    color: '#b8860b',
    detail:
      'Dick Rowland, a 19-year-old Black shoeshiner, enters an elevator in the Drexel Building. The white operator, Sarah Page, screams. Rowland is arrested the next morning. The Tulsa Tribune runs the headline: "Nab Negro for Attacking Girl In an Elevator." Modern evidence suggests Rowland tripped and accidentally grabbed her arm. The charges were later dropped.',
  },
  {
    year: 'May 31 — Evening',
    label: 'The Mob Assembles',
    color: '#c0392b',
    detail:
      'A white mob of hundreds gathers at the Tulsa County Courthouse demanding Rowland be handed over for lynching. Seventy-five armed Black men — many of them WWI veterans — arrive to help the Sheriff protect Rowland. A white man attempts to disarm a Black veteran. A shot is fired. The mob surges. Black residents retreat to Greenwood as the crowd swells past 2,000.',
  },
  {
    year: 'June 1 — Before Dawn',
    label: 'The Invasion Begins',
    color: '#c0392b',
    detail:
      'White rioters set fire to businesses along Archer Street. Fire trucks responding to calls are turned away at gunpoint. Police officers — many newly deputized members of the white mob — participate in the looting and arrests. Black residents who attempt to flee are shot. A signal whistle sounds around 5 AM and an organized force of roughly 10,000 invades Greenwood from multiple directions simultaneously.',
  },
  {
    year: 'June 1 — Daybreak',
    label: 'The Air Attack',
    color: '#c0392b',
    detail:
      'Private biplanes circle over Greenwood. Witnesses describe gunfire from the planes and incendiary devices dropped on homes and businesses. It is one of the only incidents in American history where U.S. citizens were attacked from the air by other citizens on American soil. The fires spread rapidly. Firefighters are still being blocked. The National Guard arrives from Oklahoma City — and begins arresting Black survivors rather than stopping the mob.',
  },
  {
    year: 'June 1 — Noon',
    label: 'Greenwood is Gone',
    color: '#c0392b',
    detail:
      'By noon, 35 city blocks are rubble and ash. 1,256 homes burned. 191 businesses razed. 12 churches destroyed. The only Black hospital in the region — demolished. 10,000 Black residents are homeless. 6,000 are rounded up and interned in camps at the Convention Hall and Fairgrounds, forced to carry identification cards to move through their own city. Martial law is declared.',
  },
  {
    year: '1921–1922',
    label: 'The System Tries to Finish the Job',
    color: '#c0392b',
    detail:
      'City officials pass a fire ordinance specifically designed to prevent Black owners from rebuilding on their own land — a naked attempt to seize Greenwood permanently. The ordinance is later ruled unconstitutional. Insurance claims by Black property owners are denied across the board. Despite all of it, residents return to the ruins and begin rebuilding with their own hands.',
  },
  {
    year: '1996–2001',
    label: 'The State Finally Looks',
    color: '#3c6e71',
    detail:
      'Oklahoma establishes the Tulsa Race Riot Commission. Its 2001 report recommends reparations for survivors and descendants. The state provides scholarships and economic development programs but refuses direct payments. No reparations are paid. Mass grave sites are identified for future excavation.',
  },
  {
    year: '2024–2025',
    label: 'Evidence from the Ground',
    color: '#3c6e71',
    detail:
      'DNA analysis identifies C.L. Daniel — a WWI veteran — as the first victim confirmed from mass graves exhumed at Oaklawn Cemetery. The Department of Justice releases its first full review, concluding the massacre was a "coordinated, military-style attack" facilitated by local authorities. Tulsa Mayor Monroe Nichols announces a $105 million private trust for descendants. Viola Ford Fletcher, who survived as a child, dies at age 111. Lessie Benningfield ("Mother Randle") becomes the last known living survivor.',
  },
];

const facts = [
  { label: 'Date',         value: 'May 31 – June 1, 1921',     detail: '18 hours of organized destruction' },
  { label: 'Location',     value: 'Greenwood, Tulsa OK',         detail: 'The wealthiest Black community in U.S. history' },
  { label: 'Deaths',       value: 'Up to 300',                   detail: 'Official count: 36. Historian estimates: 150–300+' },
  { label: 'Displaced',    value: '10,000 residents',            detail: '6,000 interned in government camps' },
  { label: 'Destroyed',    value: '35 city blocks',              detail: '1,256 homes, 191 businesses, 12 churches, 1 hospital' },
  { label: 'Prosecutions', value: 'Zero',                        detail: 'No one charged. Grand jury blamed Black residents.' },
  { label: 'Property Loss','value': '~$50M (2025 dollars)',       detail: '$1.5–2M in 1921 — all insurance claims denied' },
  { label: 'Reparations',  value: '$105M trust (2025)',           detail: 'Private fund, 104 years after the massacre' },
];

const figures = [
  { name: 'Dick Rowland',         role: 'The 19-year-old shoeshiner whose arrest became the pretext. Charges were dropped. He left Tulsa and never returned.' },
  { name: 'O.W. Gurley',          role: 'Founder of the Greenwood District. Purchased the original 40 acres and built a community from scratch.' },
  { name: 'A.C. Jackson',         role: 'Renowned Black surgeon — described as "the most able Negro surgeon in America." Murdered by the mob while surrendering with his hands up.' },
  { name: 'Mary E. Jones Parrish',role: 'Survivor and journalist. Published the first eyewitness account, Events of the Tulsa Disaster (1922), before the story was buried.' },
  { name: 'Buck Colbert Franklin',role: 'Greenwood attorney who fought land-seizure ordinances from a tent in the rubble. His handwritten memoir was discovered in 2015.' },
  { name: 'Viola Ford Fletcher',  role: 'Survived as a 7-year-old. Testified before Congress at age 107. Died November 2025 at 111 — one of the last living witnesses.' },
];

export default function BlackWallStreet() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{
        background: '#05080a',
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, rgba(60,110,113,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 75% 40%, rgba(184,134,11,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 28, height: 3, background: '#b8860b', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b8860b' }}>
                Greenwood District · Tulsa, Oklahoma · 1921
              </span>
              <div style={{ width: 28, height: 3, background: '#b8860b', borderRadius: 99 }} />
            </div>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(2.6rem, 9vw, 6rem)',
            fontWeight: 900, letterSpacing: '-0.035em',
            lineHeight: 0.95, color: '#fff', marginBottom: 28,
          }}>
            Black<br />
            <span style={{ color: '#b8860b' }}>Wall Street</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            lineHeight: 1.78, maxWidth: '56ch', marginBottom: 32,
          }}>
            The Greenwood District of Tulsa, Oklahoma was the wealthiest Black
            community in American history. In 18 hours on May 31–June 1, 1921,
            a white mob — aided by local police and the National Guard — burned
            it to the ground. No one was ever charged.
          </motion.p>

          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Tulsa, OK', 'May–June 1921', '35 Blocks Destroyed', '0 Prosecutions'].map(tag => (
              <span key={tag} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'Roboto Mono, monospace',
                fontSize: '0.6rem', fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '6px 14px', borderRadius: 99,
              }}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Opening quote ─────────────────────────────────── */}
      <div style={{
        background: '#0e0c08',
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)',
            fontStyle: 'italic', fontWeight: 500,
            color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, margin: 0,
          }}>
            "I was 7 years old when the Tulsa Race Massacre occurred. I have never
            forgotten the violence of the white mob and I will never forget watching
            my city burn. I have carried this pain with me for 100 years."
          </p>
          <div style={{ marginTop: 12, fontFamily: 'Roboto Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em' }}>
            — Viola Ford Fletcher, Survivor — Congressional Testimony, 2021 · Died November 24, 2025, age 111
          </div>
        </div>
      </div>

      {/* ── Fast facts ────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#b8860b', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b8860b' }}>Key Facts</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            {facts.map(f => (
              <div key={f.label} style={{
                background: '#fff', border: '1px solid var(--border)',
                borderRadius: 14, padding: '16px 18px',
                boxShadow: '0 2px 8px rgba(53,53,53,0.05)',
              }}>
                <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.56rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8860b', marginBottom: 6 }}>{f.label}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: 900, color: '#353535', marginBottom: 5, letterSpacing: '-0.01em' }}>{f.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{f.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What was Black Wall Street ─────────────────────── */}
      <section style={{
        background: '#fff',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem 3rem', alignItems: 'start' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>What They Built</span>
            </div>
            <h2 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(1.3rem, 2.8vw, 1.9rem)',
              fontWeight: 900, letterSpacing: '-0.02em',
              color: '#353535', lineHeight: 1.1, marginBottom: 0,
            }}>
              The Greenwood District
            </h2>
          </div>

          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 14 }}>
              By 1921, Greenwood was 35 blocks of Black self-sufficiency in the
              middle of segregated Oklahoma. It had its own economy: doctors,
              lawyers, dentists, grocery stores, hotels, theaters, and a thriving
              business district along Greenwood Avenue — called "Deep Greenwood."
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, margin: 0 }}>
              Residents kept their money circulating within the community — a dollar
              was said to change hands 36 times before leaving Greenwood. That
              economic self-determination was both the community's greatest strength
              and the source of white resentment that would destroy it.
            </p>
          </div>

          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                ['100+', 'Businesses'],
                ['12', 'Churches'],
                ['2', 'Newspapers'],
                ['1', 'Black Hospital'],
                ['Hotels', 'Including the luxury Stradford'],
                ['Schools', 'Booker T. Washington High'],
              ].map(([n, l]) => (
                <div key={l} style={{
                  background: 'var(--bg-elevated)', borderRadius: 10, padding: '12px 14px',
                  border: '1px solid var(--border)',
                }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.1rem', fontWeight: 900, color: '#353535', letterSpacing: '-0.02em' }}>{n}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.73rem', color: 'var(--text-muted)', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
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
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>Timeline</span>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, #3c6e71, #c0392b 30%, #c0392b 80%, #3c6e71)', borderRadius: 2 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'flex', gap: 20 }}
                >
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                    background: item.color,
                    border: '3px solid var(--bg)',
                    boxShadow: `0 0 0 2px ${item.color}33`,
                    marginTop: 2,
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: item.color, marginBottom: 4 }}>
                      {item.year}
                    </div>
                    <h3 style={{
                      fontFamily: 'Montserrat, sans-serif', fontSize: '1rem',
                      fontWeight: 800, letterSpacing: '-0.015em',
                      color: '#353535', lineHeight: 1.2, marginBottom: 8,
                    }}>
                      {item.label}
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

      {/* ── Air attack note ───────────────────────────────── */}
      <section style={{
        background: 'var(--bg-elevated)',
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{
            background: 'rgba(192,57,43,0.05)',
            border: '1.5px solid rgba(192,57,43,0.2)',
            borderRadius: 14, padding: '20px 22px',
            display: 'flex', gap: 14, alignItems: 'flex-start',
            marginBottom: 28,
          }}>
            <AlertTriangle size={18} color="#c0392b" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 800, color: '#c0392b', marginBottom: 6 }}>Aircraft Over Greenwood</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#353535', lineHeight: 1.7, margin: 0 }}>
                Witnesses reported biplanes circling Greenwood during the massacre, with gunfire
                directed at fleeing residents and incendiary devices dropped on buildings.
                This is one of the only documented instances in American history where
                U.S. citizens were attacked from the air by other American citizens on
                domestic soil. The state of Oklahoma did not officially acknowledge the
                air attack until the 2001 investigative report.
              </p>
            </div>
          </div>

          <div style={{
            background: 'rgba(184,134,11,0.06)',
            border: '1.5px solid rgba(184,134,11,0.2)',
            borderRadius: 14, padding: '20px 22px',
            display: 'flex', gap: 14, alignItems: 'flex-start',
          }}>
            <AlertTriangle size={18} color="#b8860b" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 800, color: '#b8860b', marginBottom: 6 }}>The Grand Jury Blamed Black Residents</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#353535', lineHeight: 1.7, margin: 0 }}>
                The 1921 grand jury investigated the massacre and concluded it was caused
                by the "agitation among negroes" — specifically blaming the Black men
                who came to the courthouse to protect Dick Rowland. Not a single white
                rioter, arsonist, or killer was charged. Dick Rowland himself was
                eventually released and the case against him was dismissed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key figures ───────────────────────────────────── */}
      <section style={{
        background: '#fff',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>People to Remember</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
            {figures.map(f => (
              <div key={f.name} style={{
                background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                borderRadius: 14, padding: '16px 18px',
                boxShadow: '0 2px 8px rgba(53,53,53,0.04)',
              }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', fontWeight: 800, color: '#353535', marginBottom: 6 }}>{f.name}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.62 }}>{f.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Matters ────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>Why It Matters</span>
          </div>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(1.3rem, 2.8vw, 1.9rem)',
            fontWeight: 900, letterSpacing: '-0.02em',
            color: '#353535', lineHeight: 1.1, marginBottom: 20,
          }}>
            This Wasn't a Riot. It Was an Erasure.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 14, maxWidth: '63ch' }}>
            The word "riot" implies chaos, spontaneity, mutual violence. The Tulsa
            massacre was organized. Planes were in the air. Police deputized the mob.
            The National Guard arrested survivors instead of attackers. City officials
            passed ordinances afterward to prevent rebuilding. These are the actions
            of a system, not a crowd.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 14, maxWidth: '63ch' }}>
            The story was suppressed for decades — left out of Oklahoma history
            textbooks until 2020. The massacre wasn't widely known outside Tulsa
            until the late 1990s. For 75 years, survivors were expected to simply
            move on. Many did, because they had no other choice.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 0, maxWidth: '63ch' }}>
            In 2025, a DNA-identified victim was finally named from a mass grave.
            The last surviving witness died that same year at 111. The $105 million
            trust announced for descendants has not replaced what was taken — an
            entire economy, an entire community, 300 lives, and 104 years of
            compounding wealth that never happened.
          </p>
        </div>
      </section>

      {/* ── Closing ───────────────────────────────────────── */}
      <section style={{
        background: '#05080a',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Building2 size={32} color="#b8860b" style={{ margin: '0 auto 24px' }} />
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)',
            fontWeight: 900, letterSpacing: '-0.025em',
            color: '#fff', lineHeight: 1.1, marginBottom: 20,
          }}>
            They built the wealthiest<br />
            <span style={{ color: '#b8860b' }}>Black community in America.</span><br />
            <span style={{ color: '#3c6e71' }}>It was burned in 18 hours.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: '0.95rem', lineHeight: 1.78, margin: '0 auto 36px', maxWidth: '46ch' }}>
            The Greenwood District was not an accident of history. It was built
            intentionally, sustained deliberately, and destroyed by design.
            Its legacy is both a testament to what Black America has always been
            capable of — and a reminder of what it has always been up against.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/rosewood')}
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
              Rosewood Massacre <ArrowRight size={15} />
            </button>
            <a
              href="https://en.wikipedia.org/wiki/Tulsa_race_massacre"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent', color: 'rgba(255,255,255,0.62)',
                border: '1.5px solid rgba(255,255,255,0.15)',
                borderRadius: 12, padding: '0.9rem 2rem',
                fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem',
                fontWeight: 600, cursor: 'pointer', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 7,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#b8860b'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.62)'; }}
            >
              <ExternalLink size={14} /> Wikipedia Article
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
