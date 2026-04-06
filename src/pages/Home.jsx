import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Users, Map, Brain, Star, Trophy, ArrowRight,
  BookOpen, Lightbulb, Music2, Castle, Zap, ArrowUpRight, ChevronRight, Play,
} from 'lucide-react';
import { figures } from '../data/figures';
import FigureImage from '../components/FigureImage';

function getDailyFigure() {
  const d = new Date();
  const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  return figures[seed % figures.length];
}
function getTodaysFigure() {
  const d = new Date();
  const seed = d.getFullYear() * 1000 + d.getMonth() * 31 + d.getDate() + 7;
  return figures[seed % figures.length];
}
function getThirdFigure() {
  const d = new Date();
  const seed = d.getFullYear() * 500 + d.getMonth() * 20 + d.getDate() + 13;
  return figures[seed % figures.length];
}

const dailyFigure  = getDailyFigure();
const todaysFigure = getTodaysFigure();
const thirdFigure  = getThirdFigure();

const sections = [
  { label: 'Historical Figures', icon: Users,     to: '/figures',              desc: 'Leaders, activists & freedom fighters',     color: '#3c6e71' },
  { label: 'Inventors',          icon: Lightbulb, to: '/inventors',            desc: 'Science, technology & innovation',           color: '#284b63' },
  { label: 'Interactive Map',    icon: Map,       to: '/map',                  desc: 'Explore birthplaces across the globe',       color: '#3c6e71' },
  { label: 'Knowledge Quiz',     icon: Brain,     to: '/quiz',                 desc: 'Test your understanding daily',              color: '#284b63' },
  { label: 'Story Moments',      icon: Star,      to: '/stories',              desc: 'Cinematic narrated accounts',                color: '#3c6e71' },
  { label: 'Music Origins',      icon: Music2,    to: '/origins',              desc: 'Black roots of every American genre',        color: '#284b63' },
  { label: 'Medieval Europe',    icon: Castle,    to: '/black-central-europe', desc: 'The Moors & Black presence 1000–1500',       color: '#3c6e71' },
  { label: 'My Progress',        icon: Trophy,    to: '/progress',             desc: 'Track your learning journey',                color: '#284b63' },
];

const marqueeItems = [
  'Civilisation Began in Africa',
  'The Moors — 781 Years in Europe',
  'Rock & Roll Has Black Roots',
  '5,000 Years of History',
  'Al-Andalus Built the Renaissance',
  'Mansa Musa — Richest Person Who Ever Lived',
  'Black People Built This World',
  'The First Physicians Were African',
  'Egypt — 3,000 Years of Civilisation',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const stagger = {
  initial: 'hidden',
  animate: 'visible',
  variants: { visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } },
};
const child = {
  variants: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  },
};

export default function Home() {
  const navigate = useNavigate();
  const explored = figures.filter(f => f.explored).length;

  return (
    <div style={{ overflowX: 'hidden', background: 'var(--bg)' }}>

      {/* ══════════════════════════════════════════════════════
          TOP INFO BAR — thin strip like AgriFlow
      ══════════════════════════════════════════════════════ */}
      <div style={{
        background: '#284b63',
        padding: '8px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        flexWrap: 'wrap',
      }}>
        <div style={{
          fontFamily: 'Roboto Mono, monospace',
          fontSize: '0.6rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.65)',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          <span style={{ color: 'rgba(255,255,255,0.9)' }}>✦ A Living Archive of Black History</span>
          <span style={{ opacity: 0.4, fontSize: '0.4rem' }}>|</span>
          <span>{figures.length} Figures · {new Date().getFullYear()} · Always Free</span>
        </div>
        <button
          onClick={() => navigate('/quiz')}
          style={{
            background: 'var(--gold)',
            color: '#fff',
            border: 'none',
            borderRadius: 99,
            padding: '4px 14px',
            fontSize: '0.6rem',
            fontFamily: 'Roboto Mono, monospace',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Daily Quiz →
        </button>
      </div>

      {/* ══════════════════════════════════════════════════════
          HERO — AgriFlow style: split layout, bold Montserrat
      ══════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--bg-hero)',
        borderBottom: '1px solid var(--border)',
        padding: 'clamp(4rem, 9vw, 8rem) clamp(2rem, 5vw, 4rem)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Background teal glow */}
        <div style={{
          position: 'absolute', top: -120, right: -80,
          width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(60,110,113,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: '30%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(40,75,99,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }}>

          {/* Left — copy */}
          <motion.div {...stagger}>
            {/* Label pill */}
            <motion.div {...child} style={{ marginBottom: 24 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(60,110,113,0.10)',
                border: '1px solid rgba(60,110,113,0.22)',
                color: '#3c6e71',
                fontFamily: 'Roboto Mono, monospace',
                fontSize: '0.6rem', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '6px 14px', borderRadius: 99,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3c6e71' }} />
                Black History · Est. 2026
              </span>
            </motion.div>

            {/* Main headline — Montserrat, very bold */}
            <motion.h1 {...child} style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(2.8rem, 7vw, 5.6rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#353535',
              marginBottom: 0,
            }}>
              Know Where
              <br />
              <span style={{ color: '#3c6e71' }}>You Come</span>
              <br />
              From.
            </motion.h1>

            {/* Subtext */}
            <motion.p {...child} style={{
              marginTop: 28,
              color: 'var(--text-muted)',
              fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
              lineHeight: 1.78,
              maxWidth: '46ch',
            }}>
              History was written by those with the power to write it.
              Names, inventions, empires — erased. This archive exists
              to restore the record for Black Americans and the world.
            </motion.p>

            {/* CTAs */}
            <motion.div {...child} style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                className="btn-gold"
                onClick={() => navigate('/figures')}
                style={{ fontSize: '0.88rem', padding: '0.9rem 2.2rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                Enter the Archive <ArrowRight size={16} />
              </button>
              <button
                className="btn-outline"
                onClick={() => navigate('/map')}
                style={{ fontSize: '0.88rem', padding: '0.9rem 2.2rem' }}
              >
                Explore the Map
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div {...child} style={{
              marginTop: 48,
              paddingTop: 32,
              borderTop: '1px solid var(--border)',
              display: 'flex', gap: 36,
            }}>
              {[
                { n: figures.length, label: 'Figures' },
                { n: '5,000+',       label: 'Years of History' },
                { n: 16,             label: 'Categories' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                    fontWeight: 800, color: '#3c6e71',
                    lineHeight: 1, marginBottom: 4,
                  }}>{n}</div>
                  <div style={{
                    fontFamily: 'Roboto Mono, monospace',
                    fontSize: '0.57rem', letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'var(--text-faint)',
                  }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — figure image stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ position: 'relative', height: 'clamp(420px, 55vw, 580px)' }}
          >
            {/* Back card */}
            <div style={{
              position: 'absolute', right: 0, top: '8%',
              width: '68%', height: '78%',
              borderRadius: 20, overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(53,53,53,0.18)',
            }}>
              <FigureImage
                src={thirdFigure.image_url}
                name={thirdFigure.name}
                era={thirdFigure.era}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'brightness(0.88)' }}
              />
            </div>

            {/* Main card */}
            <div style={{
              position: 'absolute', left: 0, top: 0,
              width: '74%', height: '84%',
              borderRadius: 20, overflow: 'hidden',
              boxShadow: '0 28px 80px rgba(53,53,53,0.22)',
              border: '3px solid #fff',
            }}>
              <FigureImage
                src={dailyFigure.image_url}
                name={dailyFigure.name}
                era={dailyFigure.era}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'brightness(0.82) contrast(1.06)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(40,75,99,0.85) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.6rem' }}>
                <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 5 }}>Figure of the Day</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.15rem', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 8 }}>{dailyFigure.name}</div>
                <button
                  onClick={() => navigate(`/figure/${dailyFigure.id}`)}
                  style={{
                    background: '#3c6e71', color: '#fff', border: 'none',
                    borderRadius: 99, padding: '6px 16px',
                    fontSize: '0.65rem', fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700, letterSpacing: '0.04em', cursor: 'pointer',
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                  }}
                >
                  View Profile <ArrowUpRight size={11} />
                </button>
              </div>
            </div>

            {/* Small floating card — 3rd figure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                position: 'absolute', bottom: 0, right: '5%',
                background: '#fff', borderRadius: 14,
                padding: '12px 14px',
                boxShadow: '0 8px 32px rgba(53,53,53,0.16)',
                width: '48%',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/figure/${todaysFigure.id}`)}
            >
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
                  <FigureImage
                    src={todaysFigure.image_url}
                    name={todaysFigure.name}
                    era={todaysFigure.era}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3c6e71', marginBottom: 2 }}>On This Day</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#353535', lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{todaysFigure.name}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TICKER
      ══════════════════════════════════════════════════════ */}
      <div style={{
        background: '#3c6e71',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        overflow: 'hidden',
        padding: '10px 0',
      }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: '1.2rem',
              paddingRight: '2.5rem',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap',
            }}>
              {item}
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.4rem' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          FEATURES GRID — AgriFlow-style icon cards
      ══════════════════════════════════════════════════════ */}
      <motion.section
        {...fadeUp(0.05)}
        style={{
          padding: 'clamp(5rem, 10vw, 9rem) clamp(2rem, 5vw, 4rem)',
          background: 'var(--bg)',
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          {/* Section header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 52, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <div style={{ width: 28, height: 3, background: '#3c6e71', borderRadius: 99 }} />
                <span style={{
                  fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem',
                  fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: '#3c6e71',
                }}>Explore Everything</span>
              </div>
              <h2 style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
                fontWeight: 900, letterSpacing: '-0.025em',
                lineHeight: 1.05, color: '#353535',
              }}>
                The Complete Archive
              </h2>
            </div>
            <button
              className="btn-outline"
              onClick={() => navigate('/figures')}
              style={{ fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 6 }}
            >
              Browse All Figures <ChevronRight size={14} />
            </button>
          </div>

          {/* 4-column grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
            {sections.map(({ label, icon: Icon, to, desc, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.055, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => navigate(to)}
                style={{
                  cursor: 'pointer',
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                  transition: 'box-shadow 0.22s, transform 0.22s, border-color 0.22s',
                  boxShadow: '0 2px 8px rgba(53,53,53,0.05)',
                }}
                whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(53,53,53,0.12)', borderColor: '#3c6e71' }}
              >
                {/* Icon box */}
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${color}14`,
                  border: `1.5px solid ${color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} color={color} strokeWidth={2} />
                </div>

                <div>
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700, fontSize: '0.98rem',
                    color: '#353535', marginBottom: 6, lineHeight: 1.25,
                  }}>
                    {label}
                  </div>
                  <p style={{
                    color: 'var(--text-muted)', fontSize: '0.8rem',
                    lineHeight: 1.65, margin: 0,
                  }}>
                    {desc}
                  </p>
                </div>

                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  color, fontFamily: 'Roboto Mono, monospace',
                  fontSize: '0.58rem', fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  marginTop: 'auto',
                }}>
                  Explore <ArrowUpRight size={10} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════
          TODAY'S ARCHIVE — image-heavy, alternating bg
      ══════════════════════════════════════════════════════ */}
      <motion.section
        {...fadeUp(0.05)}
        style={{
          padding: 'clamp(5rem, 10vw, 9rem) clamp(2rem, 5vw, 4rem)',
          background: 'var(--bg-elevated)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 3, background: '#3c6e71', borderRadius: 99 }} />
                <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>Daily Feature</span>
              </div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.05, color: '#353535' }}>
                Today's Archive
              </h2>
            </div>
            <button
              className="btn-ghost"
              onClick={() => navigate('/figures')}
              style={{ fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)' }}
            >
              Browse all <ChevronRight size={14} />
            </button>
          </div>

          {/* Cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 20 }}>

            {/* Featured figure — big card */}
            <motion.div
              style={{
                background: '#fff', borderRadius: 20,
                border: '1px solid var(--border)',
                cursor: 'pointer', overflow: 'hidden',
                position: 'relative', minHeight: 500,
                boxShadow: '0 4px 20px rgba(53,53,53,0.08)',
              }}
              onClick={() => navigate(`/figure/${dailyFigure.id}`)}
              whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(53,53,53,0.16)' }}
              transition={{ duration: 0.28 }}
            >
              <div style={{ position: 'absolute', inset: 0 }}>
                <FigureImage
                  src={dailyFigure.image_url}
                  name={dailyFigure.name}
                  era={dailyFigure.era}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(40,75,99,0.95) 0%, rgba(40,75,99,0.4) 50%, transparent 100%)' }} />

              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                  <span style={{
                    background: '#3c6e71', color: '#fff',
                    fontFamily: 'Montserrat, sans-serif', fontSize: '0.58rem',
                    fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '5px 13px', borderRadius: 99,
                  }}>Figure of the Day</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem' }}>
                    {dailyFigure.born}{dailyFigure.died ? ` – ${dailyFigure.died}` : ''}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.5rem)',
                  fontWeight: 900, color: '#fff',
                  letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: 12,
                }}>
                  {dailyFigure.name}
                </h3>
                <div style={{ display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap' }}>
                  {dailyFigure.tags.slice(0, 3).map(t => (
                    <span key={t} style={{
                      background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)',
                      color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.18)',
                      fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.05em',
                      textTransform: 'uppercase', padding: '4px 10px', borderRadius: 99,
                      fontFamily: 'Roboto Mono, monospace',
                    }}>{t}</span>
                  ))}
                </div>
                <p className="line-clamp-2" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: 18 }}>
                  {dailyFigure.bio}
                </p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: '#3c6e71', color: '#fff',
                  padding: '8px 18px', borderRadius: 99,
                  fontFamily: 'Montserrat, sans-serif', fontSize: '0.68rem',
                  fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase',
                  cursor: 'pointer',
                }}>
                  Read Full Profile <ArrowUpRight size={13} />
                </div>
              </div>
            </motion.div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* On This Day */}
              <motion.div
                style={{
                  background: '#fff', borderRadius: 18,
                  border: '1px solid var(--border)',
                  cursor: 'pointer', overflow: 'hidden',
                  position: 'relative', flex: 1, minHeight: 240,
                  boxShadow: '0 4px 20px rgba(53,53,53,0.06)',
                }}
                onClick={() => navigate(`/figure/${todaysFigure.id}`)}
                whileHover={{ y: -3, boxShadow: '0 12px 36px rgba(53,53,53,0.14)' }}
                transition={{ duration: 0.25 }}
              >
                <div style={{ position: 'absolute', inset: 0 }}>
                  <FigureImage
                    src={todaysFigure.image_url}
                    name={todaysFigure.name}
                    era={todaysFigure.era}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'brightness(0.6)' }}
                  />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(53,53,53,0.92) 0%, rgba(53,53,53,0.2) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(1.2rem, 2vw, 1.8rem)' }}>
                  <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4d8c90', marginBottom: 6 }}>
                    On This Day · {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.45rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 8 }}>
                    {todaysFigure.name}
                  </h3>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: '#4d8c90', fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    View Profile <ArrowUpRight size={11} />
                  </div>
                </div>
              </motion.div>

              {/* Archive counter card */}
              <motion.div
                style={{
                  background: '#fff', borderRadius: 18,
                  border: '1px solid var(--border)',
                  cursor: 'pointer', padding: 'clamp(1.4rem, 2.5vw, 2rem)',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative', overflow: 'hidden', minHeight: 190,
                  boxShadow: '0 4px 20px rgba(53,53,53,0.06)',
                }}
                onClick={() => navigate('/figures')}
                whileHover={{ y: -3, boxShadow: '0 12px 36px rgba(53,53,53,0.12)' }}
                transition={{ duration: 0.25 }}
              >
                {/* Decorative number */}
                <div style={{
                  position: 'absolute', right: -8, bottom: -12,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(5rem, 9vw, 7.5rem)',
                  fontWeight: 900, color: 'rgba(60,110,113,0.07)',
                  lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
                  letterSpacing: '-0.04em',
                }}>
                  {figures.length}
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3c6e71', marginBottom: 10 }}>
                    The Archive
                  </div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 8, color: '#353535' }}>
                    {figures.length} Historical Figures
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.65, margin: 0 }}>
                    Civil rights to medieval empires — the full scope of Black history.
                  </p>
                </div>
                <div style={{ position: 'relative', zIndex: 1, marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 5, color: '#3c6e71', fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Browse All <ArrowUpRight size={11} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════
          PULL QUOTE — teal bg band, AgriFlow impact section
      ══════════════════════════════════════════════════════ */}
      <motion.section
        {...fadeUp(0.05)}
        style={{
          padding: 'clamp(5rem, 10vw, 9rem) clamp(2rem, 5vw, 4rem)',
          background: '#284b63',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: 600, height: 600, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-40%', left: '-5%', width: 500, height: 500, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(4rem, 10vw, 7rem)',
            fontWeight: 700, color: 'rgba(255,255,255,0.12)',
            lineHeight: 0.7, marginBottom: 32, userSelect: 'none',
          }}>"</div>
          <blockquote style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(1.35rem, 3.2vw, 2.2rem)',
            fontWeight: 800, color: '#fff',
            lineHeight: 1.3, letterSpacing: '-0.02em', fontStyle: 'normal',
            margin: 0,
          }}>
            Not to perform grief — but to restore record.
            <br />
            <span style={{ color: '#4d8c90' }}>
              Black people built this world.
            </span>
          </blockquote>
          <div style={{ width: 48, height: 3, background: '#3c6e71', margin: '36px auto 0', borderRadius: 99 }} />
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════
          CTA — clean white section, AgriFlow-style split
      ══════════════════════════════════════════════════════ */}
      <motion.section
        {...fadeUp(0.05)}
        style={{
          padding: 'clamp(5rem, 10vw, 9rem) clamp(2rem, 5vw, 4rem)',
          background: 'var(--bg-hero)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
              <div style={{ width: 28, height: 3, background: '#3c6e71', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>Start Learning Today</span>
            </div>
            <h2 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
              fontWeight: 900, lineHeight: 1.0,
              letterSpacing: '-0.03em', color: '#353535', marginBottom: 20,
            }}>
              Our history is<br />
              <span style={{ color: '#3c6e71' }}>your foundation.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.78, maxWidth: '46ch', margin: 0 }}>
              {figures.length} figures. Decades of civil rights. Centuries of invention.
              Millennia of empire. Build your path and carry the knowledge forward.
            </p>

            <div style={{ display: 'flex', gap: 40, marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
              {[
                { n: '8', label: 'Learning Paths' },
                { n: '30+', label: 'Quiz Questions' },
                { n: `${figures.length}`, label: 'Profiles' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.7rem', fontWeight: 900, color: '#3c6e71', lineHeight: 1, marginBottom: 5 }}>{n}</div>
                  <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.56rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — action buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <motion.button
              onClick={() => navigate('/learning')}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 8, background: '#3c6e71', color: '#fff',
                border: 'none', borderRadius: 12,
                padding: '1.1rem 1.5rem', fontSize: '0.92rem', fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif', cursor: 'pointer',
                transition: 'background 0.2s, transform 0.15s',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={e => e.currentTarget.style.background = '#2a5255'}
              onMouseLeave={e => e.currentTarget.style.background = '#3c6e71'}
            >
              <BookOpen size={17} /> Start a Learning Path
            </motion.button>

            <motion.button
              onClick={() => navigate('/quiz')}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 8, background: '#284b63', color: '#fff',
                border: 'none', borderRadius: 12,
                padding: '1.1rem 1.5rem', fontSize: '0.92rem', fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif', cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={e => e.currentTarget.style.background = '#1e3a4d'}
              onMouseLeave={e => e.currentTarget.style.background = '#284b63'}
            >
              <Zap size={17} /> Take a Daily Quiz
            </motion.button>

            <motion.button
              onClick={() => navigate('/figures')}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 8, background: 'transparent', color: '#353535',
                border: '2px solid var(--border-strong)', borderRadius: 12,
                padding: '1.1rem 1.5rem', fontSize: '0.92rem', fontWeight: 600,
                fontFamily: 'Montserrat, sans-serif', cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#3c6e71'; e.currentTarget.style.color = '#3c6e71'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = '#353535'; }}
            >
              Browse All Figures <ArrowRight size={16} />
            </motion.button>

            {/* Free badge */}
            <div style={{
              marginTop: 4, padding: '1rem 1.4rem',
              background: 'rgba(60,110,113,0.07)',
              border: '1.5px solid rgba(60,110,113,0.18)',
              borderRadius: 12,
            }}>
              <div style={{ color: '#3c6e71', fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3c6e71', display: 'inline-block' }} />
                Always Free
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.55 }}>
                Every profile, story, and learning path — free for the community.
              </div>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
