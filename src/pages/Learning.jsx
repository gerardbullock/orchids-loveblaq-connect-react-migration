import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Plus, Trash2, ArrowRight, CheckCircle, Search, X, GraduationCap, Flame } from 'lucide-react';
import { figures } from '../data/figures';
import { useNavigate } from 'react-router-dom';
import FigureImage from '../components/FigureImage';

const suggestedPaths = [
  {
    id: 'civil-rights',
    title: 'Civil Rights Journey',
    desc: 'From abolition to the modern movement — leaders who transformed America',
    figureIds: [1, 2, 6, 9, 55, 57, 79],
    color: '#c0392b',
    icon: '✊',
  },
  {
    id: 'inventors',
    title: 'Black Inventors & Scientists',
    desc: 'Pioneers of science, technology, and innovation who changed the world',
    figureIds: [3, 4, 5, 7, 10, 60, 70, 71],
    color: '#8B6200',
    icon: '⚗️',
  },
  {
    id: 'global',
    title: 'Global Black Leadership',
    desc: 'Pan-African leaders, revolutionary figures, and worldwide influence',
    figureIds: [8, 69, 93, 92, 94, 107, 109],
    color: '#27ae60',
    icon: '🌍',
  },
  {
    id: 'arts',
    title: 'Arts, Music & Culture',
    desc: 'Artists, musicians, and writers who defined Black culture globally',
    figureIds: [61, 64, 87, 88, 89, 84, 103, 67],
    color: '#8e44ad',
    icon: '🎵',
  },
  {
    id: 'athletes',
    title: 'Black Athletic Legends',
    desc: 'Champions who broke barriers and inspired generations',
    figureIds: [62, 65, 66, 90, 91, 111, 112, 113, 124, 125],
    color: '#e67e22',
    icon: '🏆',
  },
  {
    id: 'ancient',
    title: 'African Royalty & Empires',
    desc: 'From pharaohs to emperors — the great rulers of African history',
    figureIds: [128, 129, 130, 142, 107, 106, 110],
    color: '#2980b9',
    icon: '👑',
  },
];

export default function Learning() {
  const [savedItems, setSavedItems] = useState([55, 1, 60]);
  const [completedItems, setCompletedItems] = useState(new Set());
  const [search, setSearch] = useState('');
  const [activePathId, setActivePathId] = useState(null);
  const navigate = useNavigate();

  const savedFigures = figures.filter(f => savedItems.includes(f.id));
  const completedCount = savedFigures.filter(f => completedItems.has(f.id)).length;

  const browseFigures = useMemo(() => {
    return figures
      .filter(f => !savedItems.includes(f.id))
      .filter(f => !search || f.name.toLowerCase().includes(search.toLowerCase()) || f.era.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 50);
  }, [savedItems, search]);

  function addFigure(id) {
    if (!savedItems.includes(id)) setSavedItems(s => [...s, id]);
  }

  function removeFigure(id) {
    setSavedItems(s => s.filter(i => i !== id));
    setCompletedItems(s => { const n = new Set(s); n.delete(id); return n; });
  }

  function toggleComplete(id) {
    setCompletedItems(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }

  const progressPct = savedFigures.length > 0 ? Math.round((completedCount / savedFigures.length) * 100) : 0;

  return (
    <div style={{ padding: 'clamp(1.25rem, 3vw, 2.5rem) clamp(1.25rem, 4vw, 2.5rem)', maxWidth: 1100 }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
        <div className="section-label" style={{ marginBottom: 6 }}>Personalized Study</div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: 'var(--text)', marginBottom: 4 }}>Learning Path Builder</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 13.5 }}>Build a personalized curriculum from historical figures and events</p>
          </div>
          {savedFigures.length > 0 && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14, background: 'var(--bg-card)',
              border: '1px solid var(--border-gold)', borderRadius: 12, padding: '12px 18px',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--gold)', fontSize: 20, fontWeight: 700, fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{completedCount}</div>
                <div style={{ color: 'var(--text-faint)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>Done</div>
              </div>
              <div style={{ width: 1, height: 32, background: 'var(--border)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--text)', fontSize: 20, fontWeight: 700, fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{savedFigures.length}</div>
                <div style={{ color: 'var(--text-faint)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>Saved</div>
              </div>
              <div style={{ width: 1, height: 32, background: 'var(--border)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: progressPct === 100 ? '#27ae60' : 'var(--gold)', fontSize: 20, fontWeight: 700, fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{progressPct}%</div>
                <div style={{ color: 'var(--text-faint)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>Progress</div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Progress bar */}
      {savedFigures.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: 28 }}>
          <div className="progress-bar-track">
            <motion.div
              className="progress-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 24, marginBottom: 36 }}>

        {/* Saved Figures */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <GraduationCap size={17} color="var(--gold)" />
            <h3 style={{ color: 'var(--text)', fontSize: 16, fontWeight: 600 }}>Your Study List</h3>
            <span className="badge">{savedFigures.length}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minHeight: 160 }}>
            <AnimatePresence>
              {savedFigures.map(f => {
                const done = completedItems.has(f.id);
                return (
                  <motion.div
                    key={f.id}
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="card"
                    style={{ padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 11, opacity: done ? 0.65 : 1 }}
                  >
                    <FigureImage
                      src={f.image_url}
                      name={f.name}
                      era={f.era}
                      style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0, filter: done ? 'grayscale(60%)' : 'grayscale(10%)' }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: 'var(--text)', fontSize: 13.5, fontWeight: 500, marginBottom: 1, textDecoration: done ? 'line-through' : 'none' }}>{f.name}</div>
                      <div style={{ color: 'var(--text-faint)', fontSize: 11 }}>{f.era}</div>
                    </div>
                    <button
                      onClick={() => navigate(`/figure/${f.id}`)}
                      title="View profile"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-faint)', padding: 4, display: 'flex' }}
                    >
                      <ArrowRight size={13} />
                    </button>
                    <button
                      onClick={() => toggleComplete(f.id)}
                      title={done ? 'Mark incomplete' : 'Mark complete'}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: done ? 'var(--gold)' : 'var(--text-faint)', display: 'flex' }}
                    >
                      <CheckCircle size={17} fill={done ? 'var(--gold)' : 'none'} />
                    </button>
                    <button
                      onClick={() => removeFigure(f.id)}
                      title="Remove"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--text-faint)', display: 'flex' }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {savedFigures.length === 0 && (
              <div style={{
                color: 'var(--text-faint)', fontSize: 13, padding: '28px 20px',
                textAlign: 'center', border: '1px dashed var(--border)', borderRadius: 12,
              }}>
                <BookOpen size={24} style={{ margin: '0 auto 10px', display: 'block', opacity: 0.3 }} />
                No figures saved yet.<br />Add some from the list or choose a path below.
              </div>
            )}
          </div>
        </div>

        {/* Browse & Add */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <Plus size={17} color="var(--gold)" />
            <h3 style={{ color: 'var(--text)', fontSize: 16, fontWeight: 600 }}>Add to Path</h3>
          </div>

          <div style={{ position: 'relative', marginBottom: 10 }}>
            <Search size={13} style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search figures..."
              className="input"
              style={{ paddingLeft: 32, fontSize: 13 }}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 9, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex' }}>
                <X size={12} />
              </button>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 370, overflowY: 'auto', paddingRight: 2 }}>
            {browseFigures.map(f => (
              <div
                key={f.id}
                className="card"
                style={{ padding: '9px 13px', display: 'flex', alignItems: 'center', gap: 10 }}
              >
                <FigureImage
                  src={f.image_url}
                  name={f.name}
                  era={f.era}
                  style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0, filter: 'grayscale(20%)' }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: 13, fontWeight: 500, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{f.name}</div>
                  <div style={{ color: 'var(--text-faint)', fontSize: 10 }}>{f.era}</div>
                </div>
                <button onClick={() => addFigure(f.id)} className="btn-outline" style={{ padding: '3px 10px', fontSize: 11, flexShrink: 0 }}>
                  + Add
                </button>
              </div>
            ))}
            {browseFigures.length === 0 && (
              <div style={{ color: 'var(--text-faint)', fontSize: 13, padding: '20px', textAlign: 'center' }}>
                {search ? 'No results found.' : 'All figures added!'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Suggested Paths */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <div>
            <div className="section-label">Ready-Made</div>
            <h3 style={{ color: 'var(--text)', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}>Curated Learning Paths</h3>
          </div>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--border), transparent)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
          {suggestedPaths.map(p => {
            const pathFigures = figures.filter(f => p.figureIds.includes(f.id));
            const isActive = activePathId === p.id;
            return (
              <motion.div
                key={p.id}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className="card"
                onClick={() => setActivePathId(isActive ? null : p.id)}
                style={{
                  padding: '18px 20px', cursor: 'pointer', overflow: 'hidden',
                  borderColor: isActive ? p.color + '60' : 'var(--border)',
                  boxShadow: isActive ? `0 0 20px ${p.color}18` : 'var(--shadow-card)',
                }}
              >
                {/* Top accent bar */}
                <div style={{ height: 3, background: `linear-gradient(90deg, ${p.color}, transparent)`, borderRadius: 2, marginBottom: 14, marginLeft: -20, marginRight: -20, marginTop: -18 }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 20 }}>{p.icon}</span>
                  <h4 style={{ color: 'var(--text)', fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>{p.title}</h4>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: 12, lineHeight: 1.55, marginBottom: 14 }}>{p.desc}</p>

                {/* Figure avatars */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: isActive ? 14 : 0 }}>
                  {pathFigures.slice(0, 5).map((f, i) => (
                    <div key={f.id} style={{
                      width: 26, height: 26, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                      border: '2px solid var(--bg-card)', marginLeft: i === 0 ? 0 : -8,
                    }}>
                      <FigureImage
                        src={f.image_url}
                        name={f.name}
                        era={f.era}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(20%)' }}
                      />
                    </div>
                  ))}
                  <div style={{
                    width: 26, height: 26, borderRadius: '50%', marginLeft: -8,
                    background: `${p.color}20`, border: `2px solid var(--bg-card)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 9, fontWeight: 700, color: p.color,
                  }}>
                    +{pathFigures.length}
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.button
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="btn-gold"
                      onClick={e => { e.stopPropagation(); pathFigures.forEach(f => addFigure(f.id)); setActivePathId(null); }}
                      style={{ width: '100%', justifyContent: 'center', fontSize: 13, padding: '0.55rem 1rem' }}
                    >
                      <Flame size={13} /> Add All {pathFigures.length} Figures
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
