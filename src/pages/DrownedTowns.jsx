import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, MapPin, Calendar, ChevronDown, ChevronUp, ExternalLink, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const towns = [
  {
    id: 1,
    name: 'Oscarville, Georgia',
    lake: 'Lake Lanier',
    year: '1950s',
    state: 'GA',
    lat: 34.2,
    lng: -83.9,
    color: '#284b63',
    what: 'Following a wave of racial terror — including lynchings and arson — in 1912, Black residents of Oscarville were driven out at gunpoint. Their homes were burned, their land was stolen. Decades later, the U.S. Army Corps of Engineers flooded the entire area to create Lake Lanier, one of the most visited lakes in America.',
    aftermath: 'Descendants received little or no compensation. Lake Lanier has since gained an eerie reputation for unexplained drownings. The bones of those communities lie beneath its waters.',
    quote: 'The lake didn\'t just cover their land. It covered their graves.',
    tag: 'Racial Terror + Flooding',
  },
  {
    id: 2,
    name: 'Ferguson, South Carolina',
    lake: 'Lake Marion',
    year: '1941',
    state: 'SC',
    lat: 33.5,
    lng: -80.1,
    color: '#3c6e71',
    what: 'Ferguson was a prosperous Black lumber town built on generations of hard work. When the Santee Cooper hydroelectric project required its land, residents were offered insultingly low prices for their property. Those who refused faced outright seizure through eminent domain. No relocation assistance was provided.',
    aftermath: 'Lake Marion now covers the site completely. Divers have reported seeing rooftops and remnants of homes still standing on the lake floor — a ghost town frozen in 1941.',
    quote: 'They built a lake over everything we had and called it progress.',
    tag: 'Eminent Domain',
  },
  {
    id: 3,
    name: 'Little Egypt, North Carolina',
    lake: 'Belerus Lake',
    year: 'Mid-20th Century',
    state: 'NC',
    lat: 36.1,
    lng: -79.8,
    color: '#284b63',
    what: 'Little Egypt was a self-sufficient farming and fishing village whose residents had built a tight-knit community over generations. When the dam project arrived, families were removed through eminent domain with minimal compensation. Adding insult to injury, they were explicitly prohibited from resettling near the new lake — banned from the shores of the land they had owned.',
    aftermath: 'The community was scattered. The fishing grounds that had sustained families for generations became recreational water for others. The name Little Egypt has been largely erased from regional history.',
    quote: 'They took our land, filled it with water, then told us we couldn\'t come back.',
    tag: 'Forced Removal',
  },
  {
    id: 4,
    name: 'Vanport, Oregon',
    lake: 'Columbia River / Delta Park',
    year: '1948',
    state: 'OR',
    lat: 45.6,
    lng: -122.7,
    color: '#3c6e71',
    what: 'Vanport was built during World War II to house workers for the shipyards. It grew into a city of over 40,000 people — the second largest city in Oregon — with a large Black population that had been drawn west by wartime employment. On May 30, 1948, the dike holding back the Columbia River failed. Residents received almost no warning. The flood destroyed the entire city in a matter of hours.',
    aftermath: 'The official death toll was 15, though many believe the real number was far higher as records were incomplete. The land became Delta Park — a recreational area. The city of Vanport, and the Black community it housed, was never rebuilt.',
    quote: 'In one afternoon, 40,000 people lost everything they had built.',
    tag: 'Flood + Neglect',
  },
  {
    id: 5,
    name: 'Kowaliga (Benson), Alabama',
    lake: 'Lake Martin',
    year: '1920s',
    state: 'AL',
    lat: 32.7,
    lng: -86.2,
    color: '#284b63',
    what: 'Kowaliga was a freedmen\'s town — built by formerly enslaved people and their descendants after emancipation. When Alabama Power Company decided to build a hydroelectric dam, it used eminent domain to seize the land. Residents received a fraction of their land\'s true value, or nothing at all. Churches were abandoned. Cemeteries were submerged.',
    aftermath: 'Lake Martin is now one of Alabama\'s most popular tourist destinations. The graves of the community\'s founders remain underwater. The song "Kowaliga" by Hank Williams — a pop hit — was named after the area, with no acknowledgment of what was destroyed.',
    quote: 'Their burial grounds became a vacation spot. Their graves are still there, beneath the water.',
    tag: 'Freedmen\'s Land Seized',
  },
  {
    id: 6,
    name: 'Seneca Village, New York',
    lake: 'Central Park Reservoir',
    year: '1857',
    state: 'NY',
    lat: 40.784,
    lng: -73.965,
    color: '#3c6e71',
    what: 'Seneca Village was founded in 1825 when a Black shoeshiner named Andrew Williams bought three lots in upper Manhattan. It grew into a remarkable community of 225 residents — mostly Black, some Irish and German — who owned their land at five times the citywide rate for Black residents. Because New York required Black men to own $250 in property to vote, Seneca Village was a political engine: 10% of all eligible Black voters in New York City lived here. They had three churches, a school, and real stone homes with bone toothbrushes and Chinese export porcelain. The city\'s newspapers called them squatters living in shanties.',
    aftermath: 'In 1857, New York used eminent domain to seize the land for Central Park. Residents were paid far below their own valuations — Andrew Williams received $2,325 for land he valued at $4,000. The village was razed. In 2011, archaeologists excavated the site and found evidence of a thriving middle-class community — exactly what the city had denied. A permanent monument is currently being planned for its 200th anniversary.',
    quote: 'They called it a park for the people. It was built on the land of people who were erased to build it.',
    tag: 'Eminent Domain · Manhattan',
  },
  {
    id: 7,
    name: 'Santos, Florida',
    lake: 'Cross Florida Ship Canal',
    year: '1930s',
    state: 'FL',
    lat: 29.18,
    lng: -82.12,
    color: '#284b63',
    what: 'Santos was a Black agricultural community established in the late 1800s in Marion County. In the 1930s, federal and state governments launched the Cross Florida Ship Canal project — a canal intended to cross the entire Florida peninsula. Santos was in the path and was destroyed. Residents were forced out during the Great Depression with minimal assistance, their economic base erased at the worst possible moment.',
    aftermath: 'The Cross Florida Ship Canal was never completed. President Nixon halted it in 1973. The land was eventually designated the Marjorie Harris Carr Cross Florida Greenway — a recreational trail. The Black community that once stood there is largely unacknowledged in its history.',
    quote: 'They cleared us out for a canal that was never finished. The land became a trail. Our history became a footnote.',
    tag: 'Federal Project · Never Completed',
  },
  {
    id: 8,
    name: 'TVA Displacements — Tennessee',
    lake: 'Chickamauga, Kentucky & Percy Priest Lakes',
    year: '1930s–1960s',
    state: 'TN',
    lat: 35.5,
    lng: -86.2,
    color: '#3c6e71',
    what: 'The Tennessee Valley Authority brought electricity to the rural South — and displaced over 125,000 people in the process. Black families bore a disproportionate share of the harm. In Bakewell, roughly 40 Black families were submerged under Chickamauga Lake. In Johnsonville, historic U.S. Colored Troops burial grounds from the Civil War were flooded for Kentucky Lake. In Couchville, Black landowners were pushed out for Percy Priest Lake in the 1960s. TVA policy provided relocation assistance — but studies have documented that Black families consistently received less help, fewer resources, and lower appraisals than white families in the same projects.',
    aftermath: 'Gordon Isom, a first-generation freedman who had built a 200-acre farm in Hawkins County, lost everything. Thousands of Black graves were either relocated carelessly or simply left to be submerged — while white graves were prioritized for relocation. The TVA is celebrated as a New Deal triumph. Its impact on Black communities remains largely unexamined in that narrative.',
    quote: 'They brought light to the valley. They took everything from the people who already lived there.',
    tag: 'TVA · Multiple Communities',
  },
  {
    id: 9,
    name: 'Susannah (Sousana), Alabama',
    lake: 'Lake Martin',
    year: '1920s',
    state: 'AL',
    lat: 32.68,
    lng: -86.18,
    color: '#284b63',
    what: 'Like Kowaliga nearby, Susannah was a freedmen\'s community founded by formerly enslaved people after the Civil War. It included the Kowaliga Academic and Industrial Institute — a school providing education to Black children in rural Alabama. Alabama Power Company\'s Martin Dam project seized the land through eminent domain in the 1920s, paying residents far below the value of what they had built over generations.',
    aftermath: 'The school was closed. The community was scattered. Susannah and Kowaliga together represent the destruction of an entire network of freedmen\'s communities — built through extraordinary effort after slavery, erased in a single corporate infrastructure decision. Lake Martin now covers both towns.',
    quote: 'Two towns. One lake. Both built by freed people. Both taken for a dam.',
    tag: 'Freedmen\'s Land · School Destroyed',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

function TownCard({ town, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: 18,
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(53,53,53,0.06)',
      }}
    >
      {/* Color top bar */}
      <div style={{ height: 5, background: town.color }} />

      <div style={{ padding: 'clamp(1.4rem, 3vw, 2rem)' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 16 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
              <span style={{
                background: `${town.color}14`,
                color: town.color,
                border: `1px solid ${town.color}30`,
                fontFamily: 'Roboto Mono, monospace',
                fontSize: '0.58rem', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '4px 10px', borderRadius: 99,
              }}>
                {town.tag}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', color: 'var(--text-faint)' }}>
                <Calendar size={10} /> {town.year}
              </span>
            </div>
            <h3 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontWeight: 900, letterSpacing: '-0.02em',
              color: '#353535', lineHeight: 1.15, marginBottom: 4,
            }}>
              {town.name}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-muted)', fontFamily: 'Roboto Mono, monospace', fontSize: '0.62rem' }}>
              <Waves size={11} />
              <span>Now: {town.lake}</span>
            </div>
          </div>

          {/* State badge */}
          <div style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: town.color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem',
            fontWeight: 900, color: '#fff', letterSpacing: '0.05em',
          }}>
            {town.state}
          </div>
        </div>

        {/* Pull quote */}
        <blockquote style={{
          borderLeft: `3px solid ${town.color}`,
          paddingLeft: 14, marginBottom: 16,
          fontFamily: 'Playfair Display, serif',
          fontSize: '0.92rem', fontStyle: 'italic',
          color: '#353535', lineHeight: 1.6,
        }}>
          "{town.quote}"
        </blockquote>

        {/* What happened */}
        <p style={{
          color: 'var(--text-muted)', fontSize: '0.88rem',
          lineHeight: 1.75, marginBottom: 12,
          display: '-webkit-box',
          WebkitLineClamp: expanded ? 'unset' : 3,
          WebkitBoxOrient: 'vertical',
          overflow: expanded ? 'visible' : 'hidden',
        }}>
          {town.what}
        </p>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 5,
            color: town.color, fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.75rem', fontWeight: 700, padding: 0,
            marginBottom: expanded ? 14 : 0,
          }}
        >
          {expanded ? <><ChevronUp size={14} /> Show less</> : <><ChevronDown size={14} /> Read more</>}
        </button>

        {/* Aftermath — only when expanded */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                background: `${town.color}08`,
                border: `1px solid ${town.color}20`,
                borderRadius: 10, padding: '14px 16px',
              }}>
                <div style={{
                  fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem',
                  fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: town.color, marginBottom: 8,
                }}>
                  Aftermath
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                  {town.aftermath}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function DrownedTowns() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{
        background: '#0d1e2a',
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Animated water ripple rings */}
        {[1,2,3].map(i => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: `${i * 260}px`, height: `${i * 260}px`,
              marginLeft: `-${i * 130}px`, marginTop: `-${i * 130}px`,
              borderRadius: '50%',
              border: '1px solid rgba(60,110,113,0.15)',
              pointerEvents: 'none',
            }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
          />
        ))}

        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 28, height: 3, background: '#3c6e71', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4d8c90' }}>
                Erased by Water
              </span>
              <div style={{ width: 28, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            </div>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(2.2rem, 7vw, 5rem)',
            fontWeight: 900, letterSpacing: '-0.03em',
            lineHeight: 1.0, color: '#fff', marginBottom: 24,
          }}>
            Drowned Towns
          </motion.h1>

          <motion.p {...fadeUp(0.2)} style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            lineHeight: 1.78, maxWidth: '54ch', margin: '0 auto 32px',
          }}>
            From Manhattan to Alabama, Black communities were cleared by eminent domain,
            corporate dams, federal canals, and government neglect — then covered with water
            and renamed lakes, parks, and recreational trails.
          </motion.p>

          {/* Stats row */}
          <motion.div {...fadeUp(0.3)} style={{
            display: 'flex', justifyContent: 'center', gap: 'clamp(2rem, 5vw, 4rem)',
            paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)',
          }}>
            {[
              { n: '9+',      label: 'Communities Documented' },
              { n: '125,000+', label: 'People Displaced' },
              { n: '$0',      label: 'Fair Compensation Given' },
            ].map(({ n, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, color: '#3c6e71', lineHeight: 1, marginBottom: 5 }}>{n}</div>
                <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.56rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Context strip ─────────────────────────────────── */}
      <div style={{
        background: '#284b63',
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)',
            fontStyle: 'italic', fontWeight: 500,
            color: 'rgba(255,255,255,0.85)', lineHeight: 1.7,
            margin: 0,
          }}>
            "These were not accidents. They were the deliberate outcomes of
            discriminatory government policy, racial violence, and the systematic
            transfer of Black wealth and land to white institutions — carried out
            under the cover of 'public works' and 'progress.'"
          </p>
          <div style={{ width: 40, height: 3, background: '#3c6e71', borderRadius: 99, marginTop: 20 }} />
        </div>
      </div>

      {/* ── Town cards ────────────────────────────────────── */}
      <motion.section
        {...fadeUp(0.05)}
        style={{
          padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
          background: 'var(--bg)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          <div style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>
                The Five Communities
              </span>
            </div>
            <h2 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 900, letterSpacing: '-0.025em',
              color: '#353535', lineHeight: 1.1,
            }}>
              What Was Lost
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {towns.map((town, i) => (
              <TownCard key={town.id} town={town} index={i} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Call to reflection ────────────────────────────── */}
      <section style={{
        background: '#0d1e2a',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Waves size={32} color="#3c6e71" style={{ margin: '0 auto 24px' }} />
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)',
            fontWeight: 900, letterSpacing: '-0.025em',
            color: '#fff', lineHeight: 1.1, marginBottom: 20,
          }}>
            The water is still there.<br />
            <span style={{ color: '#3c6e71' }}>So are the stories.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.78, marginBottom: 32, maxWidth: '46ch', margin: '0 auto 32px' }}>
            These communities were erased from maps, but not from memory.
            Knowing their names is an act of resistance.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/stories')}
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
              More Stories <ArrowRight size={15} />
            </button>
            <a
              href="https://www.bronzecommhub.com/blog/Drowned-Towns-The-Black-Communities-Erased-by-Water"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent', color: 'rgba(255,255,255,0.7)',
                border: '1.5px solid rgba(255,255,255,0.15)',
                borderRadius: 12, padding: '0.9rem 2rem',
                fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem',
                fontWeight: 600, cursor: 'pointer', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 7,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#3c6e71'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >
              <ExternalLink size={14} /> Original Article
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
