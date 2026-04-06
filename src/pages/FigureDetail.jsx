import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, BookOpen, Star, ArrowRight, Quote } from 'lucide-react';
import { figures } from '../data/figures';
import FigureImage from '../components/FigureImage';

const eraQuotes = {
  'Civil Rights': '"Injustice anywhere is a threat to justice everywhere." — Martin Luther King Jr.',
  'Science':      '"Research is creating new knowledge." — Neil Armstrong',
  'Invention':    '"Genius is one percent inspiration and ninety-nine percent perspiration."',
  'Medicine':     '"The art of medicine consists in amusing the patient while nature cures the disease."',
  'Arts & Music': '"Music gives a soul to the universe, wings to the mind." — Plato',
  'Athletics':    '"Champions keep playing until they get it right." — Billie Jean King',
  'Literature':   '"A reader lives a thousand lives before he dies." — George R.R. Martin',
  'Military':     '"Courage is not the absence of fear, but the triumph over it." — Nelson Mandela',
  'African History': '"Until the lion learns to write, every story will glorify the hunter."',
  'Ancient History': '"The further backward you can look, the further forward you are likely to see."',
};

function RelatedCard({ figure, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      onClick={() => onClick(figure.id)}
      className="card"
      style={{ cursor: 'pointer', overflow: 'hidden', display: 'flex', gap: 12, padding: '12px 14px', alignItems: 'center' }}
    >
      <FigureImage
        src={figure.image_url}
        name={figure.name}
        era={figure.era}
        style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0, filter: 'grayscale(10%)' }}
      />
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ color: 'var(--text)', fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{figure.name}</div>
        <div style={{ color: 'var(--text-muted)', fontSize: 11 }}>{figure.era} · {figure.born}{figure.died ? `–${figure.died}` : ''}</div>
        <div style={{ display: 'flex', gap: 4, marginTop: 4, flexWrap: 'wrap' }}>
          {figure.tags.slice(0, 2).map(t => <span key={t} className="tag" style={{ fontSize: 9 }}>{t}</span>)}
        </div>
      </div>
      <ArrowRight size={13} color="var(--text-faint)" style={{ flexShrink: 0 }} />
    </motion.div>
  );
}

export default function FigureDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const figure = figures.find(f => f.id === parseInt(id));

  if (!figure) {
    return (
      <div style={{ padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>✦</div>
        <h2 style={{ color: 'var(--text)', marginBottom: 8 }}>Figure Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>This historical figure doesn't exist in our archive yet.</p>
        <button className="btn-gold" onClick={() => navigate('/figures')}>
          <ArrowLeft size={14} /> Back to Archive
        </button>
      </div>
    );
  }

  const related = figures
    .filter(f => f.id !== figure.id && f.tags.some(t => figure.tags.includes(t)))
    .sort((a, b) => {
      const aScore = a.tags.filter(t => figure.tags.includes(t)).length;
      const bScore = b.tags.filter(t => figure.tags.includes(t)).length;
      return bScore - aScore;
    })
    .slice(0, 4);

  const quote = eraQuotes[figure.era] || eraQuotes['Civil Rights'];

  return (
    <div style={{ maxWidth: 900, paddingBottom: 80 }}>

      {/* ─── Hero ────────────────────────────────────────── */}
      <div style={{ position: 'relative', height: 'clamp(320px, 45vw, 460px)', overflow: 'hidden' }}>
        <FigureImage
          src={figure.image_url}
          name={figure.name}
          era={figure.era}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'top center',
            filter: 'grayscale(20%) brightness(0.78)',
          }}
        />

        {/* Layered overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.45) 50%, var(--bg) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent 60%)' }} />

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute', top: 22, left: 24,
            display: 'flex', alignItems: 'center', gap: 7,
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.14)', borderRadius: 10,
            color: '#f2e8d5', padding: '8px 16px', cursor: 'pointer',
            fontSize: 13, fontFamily: 'Inter, sans-serif', fontWeight: 500,
            transition: 'border-color 0.2s',
          }}
        >
          <ArrowLeft size={13} /> Back
        </motion.button>

        {/* Tags top-right */}
        <div style={{ position: 'absolute', top: 22, right: 24, display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {figure.tags.slice(0, 3).map(t => (
            <span key={t} style={{
              background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
              border: '1px solid rgba(218,165,32,0.4)', color: 'var(--gold)',
              fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '4px 9px', borderRadius: 20,
            }}>{t}</span>
          ))}
        </div>

        {/* Title area */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'absolute', bottom: 32, left: 28, right: 28 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <div style={{ width: 28, height: 2, background: 'var(--gold)', borderRadius: 2 }} />
            <span style={{ color: 'var(--gold)', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              {figure.era}
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', color: '#f2e8d5', lineHeight: 1.08,
            marginBottom: 8, textShadow: '0 2px 16px rgba(0,0,0,0.5)',
            fontWeight: 700, letterSpacing: '-0.02em',
          }}>
            {figure.name}
          </h1>
          <div style={{ color: 'rgba(218,165,32,0.9)', fontSize: 13.5, fontWeight: 500 }}>
            {figure.born}{figure.died ? ` – ${figure.died}` : ' – Present'} · {figure.birthplace}
          </div>
        </motion.div>
      </div>

      {/* ─── Content ─────────────────────────────────────── */}
      <div style={{ padding: '0 28px' }}>

        {/* Key facts */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, margin: '28px 0 32px' }}
        >
          {[
            { icon: Calendar, label: 'Born',       value: figure.born },
            { icon: Calendar, label: 'Died',       value: figure.died || 'Living' },
            { icon: MapPin,   label: 'Birthplace', value: figure.birthplace },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '14px 18px', transition: 'border-color 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-gold)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--gold)', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 7 }}>
                <Icon size={11} /> {label}
              </div>
              <div style={{ color: 'var(--text)', fontSize: 13.5, fontWeight: 500 }}>{value}</div>
            </div>
          ))}
        </motion.div>

        {/* Era divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
          <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, var(--gold-dark), transparent)' }} />
          <span style={{ color: 'var(--text-faint)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700 }}>
            {figure.era}
          </span>
          <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, transparent, var(--gold-dark))' }} />
        </div>

        {/* Bio */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}>
          <p style={{
            color: 'var(--text-muted)', fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
            lineHeight: 1.9, fontFamily: 'Georgia, "Playfair Display", serif',
            marginBottom: 36, maxWidth: '65ch',
          }}>
            {figure.bio}
          </p>
        </motion.div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.28 }}
          style={{
            borderLeft: '3px solid var(--gold)',
            paddingLeft: 20, marginBottom: 40,
            background: 'linear-gradient(90deg, var(--gold-dim), transparent)',
            padding: '18px 24px', borderRadius: '0 12px 12px 0',
          }}
        >
          <Quote size={18} color="var(--gold)" style={{ marginBottom: 8, opacity: 0.7 }} />
          <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.75, fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
            {quote}
          </p>
        </motion.div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 52, flexWrap: 'wrap' }}>
          <button className="btn-gold" onClick={() => navigate('/learning')} style={{ fontSize: '0.85rem' }}>
            <BookOpen size={13} /> Add to Learning Path
          </button>
          <button className="btn-outline" onClick={() => navigate('/map')} style={{ fontSize: '0.85rem' }}>
            <MapPin size={13} /> View on Map
          </button>
          <button className="btn-outline" onClick={() => navigate('/quiz')} style={{ fontSize: '0.85rem' }}>
            <Star size={13} /> Take a Quiz
          </button>
        </div>

        {/* Related figures */}
        {related.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div>
                <div className="section-label">Connected History</div>
                <h3 style={{ color: 'var(--text)', fontSize: 20 }}>Related Figures</h3>
              </div>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--border), transparent)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
              {related.map(f => (
                <RelatedCard key={f.id} figure={f} onClick={id => navigate(`/figure/${id}`)} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
