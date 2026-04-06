import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, X, LayoutGrid, List, Filter, SlidersHorizontal } from 'lucide-react';
import { figures, themes } from '../data/figures';
import FigureImage from '../components/FigureImage';

const centuries = [
  { label: 'All Time', value: 'all' },
  { label: '1200s–1600s', value: 'ancient' },
  { label: '1700s', value: 1700 },
  { label: '1800s', value: 1800 },
  { label: '1900s', value: 1900 },
  { label: '2000s', value: 2000 },
];

function FigureCard({ figure, onNavigate }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.93 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onNavigate(figure.id)}
      style={{
        cursor: 'pointer', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: 16,
        boxShadow: '0 2px 8px rgba(53,53,53,0.06)',
        transition: 'box-shadow 0.22s, transform 0.22s, border-color 0.22s',
      }}
      whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(53,53,53,0.13)', borderColor: '#3c6e71' }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 300, overflow: 'hidden', flexShrink: 0, borderRadius: '16px 16px 0 0' }}>
        <FigureImage
          src={figure.image_url}
          name={figure.name}
          era={figure.era}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'top center',
            transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
          }}
        />
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(40,75,99,0.88) 0%, rgba(40,75,99,0.18) 55%, transparent 100%)' }} />

        {/* Explored badge */}
        {figure.explored && (
          <div style={{ position: 'absolute', top: 10, left: 10 }}>
            <span style={{
              background: '#3c6e71',
              color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', padding: '4px 10px', borderRadius: 99,
              fontFamily: 'Montserrat, sans-serif',
            }}>
              ✓ Explored
            </span>
          </div>
        )}

        {/* Name overlay */}
        <div style={{ position: 'absolute', bottom: 12, left: 14, right: 14 }}>
          <h3 style={{
            fontFamily: "'Montserrat', sans-serif",
            color: '#FFFFFF', fontSize: 15, fontWeight: 800,
            marginBottom: 6, lineHeight: 1.2,
            letterSpacing: '-0.01em',
          }}>
            {figure.name}
          </h3>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {figure.tags.slice(0, 2).map(t => (
              <span key={t} style={{
                background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)',
                color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.2)',
                fontSize: 9, fontWeight: 600, letterSpacing: '0.06em',
                textTransform: 'uppercase', padding: '3px 9px', borderRadius: 99,
                fontFamily: 'Roboto Mono, monospace',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '13px 15px 15px', flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
        <div style={{
          fontFamily: 'Roboto Mono, monospace',
          color: '#3c6e71', fontSize: 10.5, fontWeight: 600,
          letterSpacing: '0.06em',
        }}>
          {figure.born}{figure.died ? ` – ${figure.died}` : ' – Present'}
          {figure.birthplace && (
            <span style={{ color: 'var(--text-faint)', fontWeight: 400 }}> · {figure.birthplace.split(',').slice(-1)[0].trim()}</span>
          )}
        </div>
        <p className="line-clamp-3" style={{ color: 'var(--text-muted)', fontSize: 12.5, lineHeight: 1.6, flex: 1, margin: 0 }}>
          {figure.bio}
        </p>
      </div>
    </motion.div>
  );
}

function TimelineView({ figures, onNavigate }) {
  return (
    <div style={{ position: 'relative', paddingLeft: 36 }}>
      <div className="timeline-line" style={{ left: '1rem' }} />
      {figures.map((figure, i) => (
        <motion.div
          key={figure.id}
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: Math.min(i * 0.018, 0.4), duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', gap: 0, marginBottom: 14, cursor: 'pointer', alignItems: 'center', position: 'relative' }}
          onClick={() => onNavigate(figure.id)}
        >
          {/* Timeline dot */}
          <div style={{
            position: 'absolute', left: -27, width: 10, height: 10, borderRadius: '50%',
            background: 'var(--gold)', border: '2px solid var(--bg)', zIndex: 1,
            boxShadow: '0 0 6px rgba(218,165,32,0.5)',
          }} />

          {/* Year label */}
          <div style={{
            position: 'absolute', left: -84, width: 50, textAlign: 'right',
            color: 'var(--gold)', fontSize: 11, fontWeight: 700,
            fontFamily: 'Playfair Display, serif',
          }}>
            {figure.born}
          </div>

          <div
            className="card"
            style={{ flex: 1, display: 'flex', gap: 14, padding: '13px 16px', overflow: 'hidden', marginLeft: 0 }}
          >
            <FigureImage
              src={figure.image_url}
              name={figure.name}
              era={figure.era}
              style={{ width: 56, height: 56, borderRadius: 10, objectFit: 'cover', objectPosition: 'top', flexShrink: 0, filter: 'grayscale(15%)' }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 5 }}>
                <h3 style={{ color: 'var(--text)', fontSize: 14.5, fontWeight: 600, lineHeight: 1.25 }}>{figure.name}</h3>
                <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                  {figure.tags.slice(0, 1).map(t => <span key={t} className="tag" style={{ fontSize: 9 }}>{t}</span>)}
                </div>
              </div>
              <p className="line-clamp-2" style={{ color: 'var(--text-muted)', fontSize: 12, lineHeight: 1.5 }}>
                {figure.bio}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Figures({ inventorsOnly = false }) {
  const [search, setSearch] = useState('');
  const [activeTheme, setActiveTheme] = useState('All');
  const [activeCentury, setActiveCentury] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const navigate = useNavigate();

  const inventorTags = ['Invention', 'Science', 'Medicine', 'Engineering', 'Technology', 'Chemistry', 'Mathematics', 'Computing', 'Physics', 'Biology', 'Aviation', 'NASA', 'Statistics'];

  const filteredThemes = inventorsOnly
    ? ['All', 'Invention', 'Science', 'Medicine', 'Engineering', 'Technology', 'Computing', 'Aviation']
    : ['All', 'Civil Rights', 'Science', 'Invention', 'Medicine', 'Arts & Music', 'Athletics', 'Sports', 'Politics', 'Literature', 'Military', 'Pan-Africanism', 'Ancient History', 'African History', 'Technology', 'Engineering'];

  const filtered = useMemo(() => {
    return figures
      .filter(f => {
        const matchTheme = activeTheme === 'All' || f.tags.includes(activeTheme) || f.era === activeTheme;
        const matchSearch = !search ||
          f.name.toLowerCase().includes(search.toLowerCase()) ||
          f.bio.toLowerCase().includes(search.toLowerCase()) ||
          f.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
        const matchType = !inventorsOnly || f.tags.some(t => inventorTags.includes(t));
        const matchCentury = activeCentury === 'all'
          ? true
          : activeCentury === 'ancient'
          ? f.born < 1700
          : (f.born >= activeCentury && f.born < activeCentury + 100);
        return matchTheme && matchSearch && matchType && matchCentury;
      })
      .sort((a, b) => a.born - b.born);
  }, [search, activeTheme, inventorsOnly, activeCentury]);

  const clearAll = () => { setSearch(''); setActiveTheme('All'); setActiveCentury('all'); };
  const hasFilters = search || activeTheme !== 'All' || activeCentury !== 'all';

  return (
    <div style={{ padding: 'clamp(1.5rem, 3vw, 2.8rem) clamp(1.5rem, 4vw, 2.8rem)' }}>

      {/* ─── Header ─────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>The Archive</span>
            </div>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#353535', marginBottom: 4 }}>
              {inventorsOnly ? 'Black Inventors & Scientists' : 'Historical Figures'}
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 13.5 }}>
              <span style={{ color: '#3c6e71', fontWeight: 700 }}>{filtered.length}</span> figure{filtered.length !== 1 ? 's' : ''}
              {activeCentury !== 'all' ? ` from the ${activeCentury === 'ancient' ? '1200s–1600s' : `${activeCentury}s`}` : ' in the archive'}
              {activeTheme !== 'All' && <> · <span style={{ color: '#3c6e71' }}>{activeTheme}</span></>}
            </p>
          </div>

          {/* View toggle */}
          <div style={{ display: 'flex', background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: 3, gap: 2, boxShadow: '0 1px 4px rgba(53,53,53,0.06)' }}>
            {[{ mode: 'grid', icon: LayoutGrid, label: 'Grid' }, { mode: 'timeline', icon: List, label: 'Timeline' }].map(({ mode, icon: Icon, label }) => (
              <button key={mode} onClick={() => setViewMode(mode)} title={label} style={{
                padding: '7px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
                background: viewMode === mode ? '#3c6e71' : 'transparent',
                color: viewMode === mode ? '#fff' : 'var(--text-muted)',
                display: 'flex', alignItems: 'center', gap: 5, transition: 'all 0.15s',
                fontSize: 12, fontFamily: 'Montserrat, sans-serif', fontWeight: viewMode === mode ? 700 : 400,
              }}>
                <Icon size={14} />
                <span style={{ display: 'none' }}>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ─── Filters ─────────────────────────────────────── */}
      <div style={{ marginBottom: 28 }}>
        {/* Search + century */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: '1 1 240px', minWidth: 200 }}>
            <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={inventorsOnly ? 'Search inventors...' : 'Search figures, achievements...'}
              className="input"
              style={{ paddingLeft: 38 }}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', padding: 2 }}>
                <X size={13} />
              </button>
            )}
          </div>

          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}>
            {centuries.map(c => (
              <button key={c.value} onClick={() => setActiveCentury(c.value)} style={{
                padding: '7px 12px', borderRadius: 8, fontSize: 12, cursor: 'pointer',
                border: '1px solid', fontFamily: 'Inter, sans-serif', transition: 'all 0.15s', whiteSpace: 'nowrap',
                borderColor: activeCentury === c.value ? 'var(--gold)' : 'var(--border)',
                background: activeCentury === c.value ? 'var(--gold-dim)' : 'transparent',
                color: activeCentury === c.value ? 'var(--gold)' : 'var(--text-muted)',
                fontWeight: activeCentury === c.value ? 600 : 400,
              }}>
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Theme pills + clear */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
          <SlidersHorizontal size={13} color="var(--text-faint)" style={{ flexShrink: 0 }} />
          {filteredThemes.map(t => (
            <button key={t} onClick={() => setActiveTheme(t)} style={{
              padding: '5px 13px', borderRadius: 20, fontSize: 12, cursor: 'pointer',
              border: '1px solid', fontFamily: 'Inter, sans-serif', transition: 'all 0.15s',
              borderColor: activeTheme === t ? 'var(--gold)' : 'var(--border)',
              background: activeTheme === t ? 'var(--gold-dim)' : 'transparent',
              color: activeTheme === t ? 'var(--gold)' : 'var(--text-muted)',
              fontWeight: activeTheme === t ? 600 : 400,
            }}>
              {t}
            </button>
          ))}
          {hasFilters && (
            <button onClick={clearAll} style={{
              padding: '5px 12px', borderRadius: 20, fontSize: 12, cursor: 'pointer',
              border: '1px solid var(--red)', background: 'rgba(192,57,43,0.08)',
              color: '#e55', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: 4,
            }}>
              <X size={11} /> Clear
            </button>
          )}
        </div>
      </div>

      {/* ─── Results ─────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--text-muted)' }}
          >
            <Filter size={44} style={{ margin: '0 auto 16px', opacity: 0.2, display: 'block' }} />
            <h3 style={{ color: 'var(--text)', fontSize: 18, marginBottom: 8 }}>No figures found</h3>
            <p style={{ fontSize: 14, marginBottom: 20 }}>Try adjusting your search or filters.</p>
            <button className="btn-outline" onClick={clearAll} style={{ fontSize: 13 }}>
              Clear All Filters
            </button>
          </motion.div>
        ) : viewMode === 'grid' ? (
          <motion.div
            key="grid"
            layout
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 22 }}
          >
            <AnimatePresence>
              {filtered.map(figure => (
                <FigureCard key={figure.id} figure={figure} onNavigate={id => navigate(`/figure/${id}`)} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div key="timeline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <TimelineView figures={filtered} onNavigate={id => navigate(`/figure/${id}`)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
