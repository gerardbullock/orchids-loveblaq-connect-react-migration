import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Flame, Target, CheckCircle, Lock, Zap, Users, BookOpen, Brain, Map } from 'lucide-react';
import { figures } from '../data/figures';
import { useNavigate } from 'react-router-dom';
import FigureImage from '../components/FigureImage';

const dailyChallenge = {
  question: "Which African American astronaut became the first Black woman to travel to space in 1992?",
  options: ["Guion Bluford", "Mae C. Jemison", "Robert McNair", "Stephanie Wilson"],
  answer: 1,
  figure: "Mae C. Jemison",
};

const achievements = [
  { id: 1, title: "First Steps",    desc: "Explore your first historical figure",    icon: "🌟", emoji: true, earned: true,  xp: 10 },
  { id: 2, title: "Quiz Master",    desc: "Score 5/5 on a single quiz",               icon: Brain,             earned: false, xp: 50 },
  { id: 3, title: "Pathfinder",     desc: "Complete a curated learning path",         icon: Map,               earned: false, xp: 75 },
  { id: 4, title: "Historian",      desc: "Explore 10 historical figures",            icon: BookOpen,          earned: false, xp: 100 },
  { id: 5, title: "Storyteller",    desc: "Read all Story Moments",                   icon: "✨", emoji: true, earned: false, xp: 60 },
  { id: 6, title: "Navigator",      desc: "Visit the Historical Map",                 icon: "🧭", emoji: true, earned: false, xp: 30 },
  { id: 7, title: "Scholar",        desc: "Explore 25 figures",                       icon: "📚", emoji: true, earned: false, xp: 150 },
  { id: 8, title: "Trailblazer",    desc: "Explore 50 figures",                       icon: "🏆", emoji: true, earned: false, xp: 300 },
];

export default function Progress() {
  const [exploredIds, setExploredIds] = useState(new Set([1, 4, 55]));
  const [dailyAnswered, setDailyAnswered] = useState(null);
  const [dailySelected, setDailySelected] = useState(null);
  const [searchFigures, setSearchFigures] = useState('');
  const navigate = useNavigate();

  const exploredCount = exploredIds.size;
  const totalCount = figures.length;
  const percentage = Math.round((exploredCount / totalCount) * 100);

  function handleDailyAnswer(idx) {
    if (dailyAnswered !== null) return;
    setDailySelected(idx);
    setDailyAnswered(idx === dailyChallenge.answer);
  }

  function toggleExplored(id) {
    setExploredIds(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }

  const displayFigures = figures.filter(f =>
    !searchFigures || f.name.toLowerCase().includes(searchFigures.toLowerCase())
  );

  const earnedAchievements = achievements.filter(a => a.earned).length;
  const totalXP = achievements.filter(a => a.earned).reduce((sum, a) => sum + a.xp, 0);

  return (
    <div style={{ padding: 'clamp(1.25rem, 3vw, 2.5rem) clamp(1.25rem, 4vw, 2.5rem)', maxWidth: 1000 }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
        <div className="section-label" style={{ marginBottom: 6 }}>Your Journey</div>
        <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: 'var(--text)', marginBottom: 4 }}>Progress Tracker</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 13.5 }}>Monitor your exploration of Black history and culture</p>
      </motion.div>

      {/* ── Top Stats Row ──────────────────────────────────── */}
      <motion.div
        initial="hidden" animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 14, marginBottom: 28 }}
      >
        {[
          { label: 'Figures Explored', value: exploredCount, total: totalCount, icon: Users, color: 'var(--gold)' },
          { label: 'Completion',        value: `${percentage}%`, icon: Target,    color: percentage > 50 ? '#27ae60' : 'var(--gold)' },
          { label: 'Achievements',      value: `${earnedAchievements}/${achievements.length}`, icon: Trophy, color: '#e67e22' },
          { label: 'Total XP',          value: totalXP,          icon: Zap,       color: '#8e44ad' },
        ].map(({ label, value, total, icon: Icon, color }) => (
          <motion.div
            key={label}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="card"
            style={{ padding: '16px 18px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: `${color}18`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={14} color={color} />
              </div>
              <span style={{ color: 'var(--text-faint)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{ color, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 700, fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{value}</span>
              {total && <span style={{ color: 'var(--text-faint)', fontSize: 11 }}>/ {total}</span>}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Progress + Daily Challenge ─────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: 20, marginBottom: 28 }}>

        {/* Progress ring */}
        <div className="card" style={{ padding: '24px', border: '1px solid var(--border-gold)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <Target size={16} color="var(--gold)" />
            <h3 style={{ color: 'var(--text)', fontSize: 15, fontWeight: 600 }}>Overall Progress</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 20 }}>
            <div style={{ position: 'relative', width: 90, height: 90, flexShrink: 0 }}>
              <svg width="90" height="90" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="45" cy="45" r="38" fill="none" stroke="var(--border)" strokeWidth="8" />
                <motion.circle
                  cx="45" cy="45" r="38" fill="none"
                  stroke="var(--gold)" strokeWidth="8" strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 38}
                  initial={{ strokeDashoffset: 2 * Math.PI * 38 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 38 * (1 - percentage / 100) }}
                  transition={{ duration: 1.4, ease: 'easeOut' }}
                />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--gold)', fontSize: 19, fontWeight: 700, fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{percentage}%</span>
              </div>
            </div>
            <div>
              <div style={{ color: 'var(--text)', fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>{exploredCount}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>of {totalCount} figures explored</div>
              <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(39,174,96,0.12)', border: '1px solid rgba(39,174,96,0.3)', color: '#27ae60', fontSize: 11, padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>
                  {exploredCount} explored
                </span>
                <span style={{ background: 'var(--gold-dim)', border: '1px solid var(--border-gold)', color: 'var(--gold)', fontSize: 11, padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>
                  {totalCount - exploredCount} remaining
                </span>
              </div>
            </div>
          </div>

          <div className="progress-bar-track">
            <motion.div
              className="progress-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <Flame size={16} color="#ff9800" />
            <h3 style={{ color: 'var(--text)', fontSize: 15, fontWeight: 600 }}>Daily Challenge</h3>
            <span style={{ marginLeft: 'auto', color: 'var(--text-faint)', fontSize: 11 }}>
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.65, marginBottom: 16 }}>
            {dailyChallenge.question}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {dailyChallenge.options.map((opt, i) => {
              const isSelected = dailySelected === i;
              const isCorrect = dailyChallenge.answer === i;
              let styles = {};
              if (dailyAnswered !== null) {
                if (isCorrect) styles = { borderColor: 'var(--gold)', background: 'var(--gold-dim)', color: 'var(--gold)' };
                else if (isSelected) styles = { borderColor: '#c0392b', background: 'rgba(192,57,43,0.08)', color: '#e55' };
              }
              return (
                <button key={i} onClick={() => handleDailyAnswer(i)} style={{
                  padding: '9px 14px', borderRadius: 9,
                  border: `1px solid ${styles.borderColor || 'var(--border)'}`,
                  background: styles.background || 'transparent',
                  color: styles.color || 'var(--text-muted)',
                  fontSize: 13, textAlign: 'left',
                  cursor: dailyAnswered !== null ? 'default' : 'pointer',
                  fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span style={{ opacity: 0.5, fontSize: 10, fontWeight: 700, width: 14 }}>{String.fromCharCode(65 + i)}</span>
                  {opt}
                  {dailyAnswered !== null && isCorrect && <CheckCircle size={13} color="var(--gold)" style={{ marginLeft: 'auto' }} />}
                </button>
              );
            })}
          </div>
          <AnimatePresence>
            {dailyAnswered !== null && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: 12, padding: '10px 14px', borderRadius: 9,
                  background: dailyAnswered ? 'rgba(39,174,96,0.1)' : 'rgba(192,57,43,0.1)',
                  color: dailyAnswered ? '#27ae60' : '#e55',
                  fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                <CheckCircle size={13} />
                {dailyAnswered ? `Correct! +10 XP earned — ${dailyChallenge.figure}` : `Not quite — the answer was ${dailyChallenge.figure}`}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Achievements ──────────────────────────────────── */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <div>
            <div className="section-label">Milestones</div>
            <h3 style={{ color: 'var(--text)', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}>Achievements</h3>
          </div>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--border), transparent)' }} />
          <span style={{ color: 'var(--text-faint)', fontSize: 12 }}>{earnedAchievements}/{achievements.length} earned</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="card"
              style={{
                padding: '16px 18px',
                border: `1px solid ${a.earned ? 'rgba(218,165,32,0.3)' : 'var(--border)'}`,
                opacity: a.earned ? 1 : 0.45,
                display: 'flex', alignItems: 'center', gap: 14, position: 'relative', overflow: 'hidden',
              }}
            >
              {a.earned && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--gold-dark), var(--gold))' }} />
              )}
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: a.earned ? 'var(--gold-dim)' : 'var(--bg-elevated)',
                border: `1px solid ${a.earned ? 'var(--border-gold)' : 'var(--border)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {a.emoji
                  ? <span style={{ fontSize: 18 }}>{a.icon}</span>
                  : <a.icon size={18} color={a.earned ? 'var(--gold)' : 'var(--text-faint)'} />
                }
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: a.earned ? 'var(--gold)' : 'var(--text-muted)', fontSize: 13.5, fontWeight: 600, marginBottom: 2 }}>{a.title}</div>
                <div style={{ color: 'var(--text-faint)', fontSize: 11, lineHeight: 1.4 }}>{a.desc}</div>
              </div>
              <div style={{ flexShrink: 0, textAlign: 'right' }}>
                {a.earned
                  ? <span style={{ color: '#27ae60', fontSize: 10, fontWeight: 700, background: 'rgba(39,174,96,0.12)', padding: '2px 7px', borderRadius: 20 }}>EARNED</span>
                  : <Lock size={13} color="var(--text-faint)" />
                }
                <div style={{ color: 'var(--text-faint)', fontSize: 10, marginTop: 4 }}>+{a.xp} XP</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Figure Exploration Map ─────────────────────────── */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <div>
            <div className="section-label">Click to Toggle</div>
            <h3 style={{ color: 'var(--text)', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}>Exploration Map</h3>
          </div>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--border), transparent)' }} />
          <span style={{ color: 'var(--text-faint)', fontSize: 12 }}>{exploredCount} explored</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: 10 }}>
          {figures.map((fig) => {
            const explored = exploredIds.has(fig.id);
            return (
              <motion.div
                key={fig.id}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                onClick={() => toggleExplored(fig.id)}
                title={fig.name}
                style={{ cursor: 'pointer', textAlign: 'center' }}
              >
                <div style={{
                  position: 'relative', width: 60, height: 60, borderRadius: '50%',
                  overflow: 'hidden', margin: '0 auto 6px',
                  border: `2px solid ${explored ? 'var(--gold)' : 'var(--border)'}`,
                  boxShadow: explored ? '0 0 10px rgba(218,165,32,0.3)' : 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}>
                  <FigureImage
                    src={fig.image_url}
                    name={fig.name}
                    era={fig.era}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'top',
                      filter: explored ? 'grayscale(0%) brightness(1)' : 'grayscale(85%) brightness(0.35)',
                      transition: 'filter 0.3s',
                    }}
                  />
                  {explored && (
                    <div style={{ position: 'absolute', bottom: -1, right: -1, background: 'var(--gold)', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid var(--bg-card)' }}>
                      <CheckCircle size={10} color="#000" strokeWidth={3} />
                    </div>
                  )}
                  {!explored && (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Lock size={14} color="rgba(255,255,255,0.2)" />
                    </div>
                  )}
                </div>
                <div style={{ color: explored ? 'var(--text-muted)' : 'var(--text-faint)', fontSize: 10, lineHeight: 1.3, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', padding: '0 2px' }}>
                  {fig.name.split(' ').slice(-1)[0]}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
