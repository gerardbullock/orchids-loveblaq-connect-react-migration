import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Map, Check } from 'lucide-react';

const palettes = [
  {
    id: 'cognac',
    name: 'Warm Cream & Cognac',
    tagline: 'Premium editorial — like a Smithsonian magazine',
    bg:        '#FAF7F2',
    bgCard:    '#FFFFFF',
    bgSection: '#F2EDE5',
    bgElevated:'#EDE7DC',
    text:      '#1C0A00',
    textMuted: '#6B5344',
    textFaint: '#A8917E',
    accent:    '#A0522D',
    accentDim: 'rgba(160,82,45,0.09)',
    accentBorder: 'rgba(160,82,45,0.22)',
    border:    'rgba(28,10,0,0.08)',
    shadow:    '0 1px 3px rgba(28,10,0,0.06), 0 8px 24px -8px rgba(28,10,0,0.12)',
    shadowHover:'0 4px 12px rgba(28,10,0,0.06), 0 20px 48px -12px rgba(160,82,45,0.18)',
  },
  {
    id: 'navy',
    name: 'Slate Blue & Gold',
    tagline: 'Institution-grade — Howard University meets NAACP',
    bg:        '#F5F6F8',
    bgCard:    '#FFFFFF',
    bgSection: '#EBEEF3',
    bgElevated:'#E4E8EF',
    text:      '#1A2340',
    textMuted: '#4A5568',
    textFaint: '#8899B0',
    accent:    '#C9963A',
    accentDim: 'rgba(201,150,58,0.09)',
    accentBorder: 'rgba(201,150,58,0.25)',
    border:    'rgba(26,35,64,0.08)',
    shadow:    '0 1px 3px rgba(26,35,64,0.06), 0 8px 24px -8px rgba(26,35,64,0.12)',
    shadowHover:'0 4px 12px rgba(26,35,64,0.06), 0 20px 48px -12px rgba(201,150,58,0.20)',
  },
  {
    id: 'forest',
    name: 'Forest Green & Amber',
    tagline: 'Pan-African energy — earthy, grounded, powerful',
    bg:        '#F7F8F4',
    bgCard:    '#FFFFFF',
    bgSection: '#EBF0E8',
    bgElevated:'#E2EAE0',
    text:      '#1A2E1A',
    textMuted: '#4A6050',
    textFaint: '#82A088',
    accent:    '#C47B0A',
    accentDim: 'rgba(196,123,10,0.09)',
    accentBorder: 'rgba(196,123,10,0.25)',
    border:    'rgba(26,46,26,0.08)',
    shadow:    '0 1px 3px rgba(26,46,26,0.06), 0 8px 24px -8px rgba(26,46,26,0.12)',
    shadowHover:'0 4px 12px rgba(26,46,26,0.06), 0 20px 48px -12px rgba(196,123,10,0.20)',
  },
  {
    id: 'terra',
    name: 'Rich Terracotta & Cream',
    tagline: 'Bold African earth tones — clay, sand, identity',
    bg:        '#FBF5EE',
    bgCard:    '#FFFFFF',
    bgSection: '#F2E8DC',
    bgElevated:'#EAD9C8',
    text:      '#120C05',
    textMuted: '#6B4F3A',
    textFaint: '#A88570',
    accent:    '#C1440E',
    accentDim: 'rgba(193,68,14,0.09)',
    accentBorder: 'rgba(193,68,14,0.22)',
    border:    'rgba(18,12,5,0.08)',
    shadow:    '0 1px 3px rgba(18,12,5,0.06), 0 8px 24px -8px rgba(18,12,5,0.12)',
    shadowHover:'0 4px 12px rgba(18,12,5,0.06), 0 20px 48px -12px rgba(193,68,14,0.18)',
  },
];

function PaletteMockup({ p, selected, onSelect }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      onClick={() => onSelect(p.id)}
      style={{
        cursor: 'pointer',
        borderRadius: 20,
        overflow: 'hidden',
        border: selected ? `2px solid ${p.accent}` : '2px solid transparent',
        boxShadow: selected
          ? `0 0 0 4px ${p.accentDim}, 0 8px 40px rgba(0,0,0,0.12)`
          : '0 4px 32px rgba(0,0,0,0.10)',
        transition: 'box-shadow 0.2s, border-color 0.2s',
        background: p.bg,
        position: 'relative',
      }}
    >
      {/* Selected checkmark */}
      {selected && (
        <div style={{
          position: 'absolute', top: 14, right: 14, zIndex: 10,
          width: 28, height: 28, borderRadius: '50%',
          background: p.accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>
          <Check size={14} color="#fff" strokeWidth={2.5} />
        </div>
      )}

      {/* ── Mini Sidebar ── */}
      <div style={{ display: 'flex', height: 440 }}>
        <div style={{
          width: 52, background: p.bgCard,
          borderRight: `1px solid ${p.border}`,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', paddingTop: 16, gap: 6,
        }}>
          {/* Logo */}
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: p.accent, marginBottom: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 13, fontWeight: 700,
            fontFamily: 'serif',
          }}>L</div>
          {[Users, Map, BookOpen].map((Icon, i) => (
            <div key={i} style={{
              width: 32, height: 32, borderRadius: 8,
              background: i === 0 ? p.accentDim : 'transparent',
              border: `1px solid ${i === 0 ? p.accentBorder : 'transparent'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={14} color={i === 0 ? p.accent : p.textFaint} strokeWidth={1.7} />
            </div>
          ))}
        </div>

        {/* ── Main Content ── */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

          {/* Hero strip */}
          <div style={{
            background: p.bgCard,
            borderBottom: `1px solid ${p.border}`,
            padding: '18px 20px 16px',
            textAlign: 'center',
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 10px', borderRadius: 99,
              background: p.accentDim, border: `1px solid ${p.accentBorder}`,
              marginBottom: 8,
            }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: p.accent, display: 'inline-block' }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: 8, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: p.accent }}>
                A Living Archive
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22, fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-0.02em', color: p.text,
              marginBottom: 6,
            }}>
              Think of what<br />
              <em style={{ fontStyle: 'italic', color: p.accent }}>was taken.</em>
            </h1>
            <p style={{ color: p.textMuted, fontSize: 10, lineHeight: 1.6, marginBottom: 12, fontFamily: 'Inter, sans-serif' }}>
              Restoring the record of Black history and achievement.
            </p>
            <div style={{ display: 'flex', gap: 7, justifyContent: 'center' }}>
              <div style={{
                background: p.accent, color: '#fff', fontSize: 9, fontWeight: 600,
                padding: '5px 14px', borderRadius: 99, fontFamily: 'Inter, sans-serif',
                display: 'flex', alignItems: 'center', gap: 4,
              }}>
                Enter the Archive <ArrowRight size={9} />
              </div>
              <div style={{
                background: 'transparent', color: p.text, fontSize: 9, fontWeight: 500,
                padding: '5px 14px', borderRadius: 99, fontFamily: 'Inter, sans-serif',
                border: `1.5px solid ${p.border}`,
              }}>
                View the Map
              </div>
            </div>
          </div>

          {/* Cards section */}
          <div style={{ padding: '14px 16px', background: p.bg, flex: 1 }}>
            <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: 7.5, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: p.accent, marginBottom: 8 }}>
              Today's Archive
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
              {/* Big card */}
              <div
                style={{
                  gridColumn: 'span 2',
                  background: p.bgCard, borderRadius: 12,
                  border: `1px solid ${hovered === 0 ? p.accentBorder : p.border}`,
                  boxShadow: hovered === 0 ? p.shadowHover : p.shadow,
                  overflow: 'hidden', height: 120,
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={() => setHovered(0)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${p.bgElevated} 0%, ${p.bgCard} 100%)` }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 12px' }}>
                  <div style={{ background: p.accent, color: '#fff', display: 'inline-block', fontSize: 7, fontWeight: 600, padding: '2px 7px', borderRadius: 99, marginBottom: 4, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Roboto Mono, monospace' }}>Figure of the Day</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 700, color: p.text, lineHeight: 1.2 }}>Frederick Douglass</div>
                  <div style={{ color: p.textFaint, fontSize: 8, fontFamily: 'Roboto Mono, monospace', marginTop: 2 }}>1818 – 1895</div>
                </div>
              </div>
              {/* Small card */}
              <div
                style={{
                  background: p.bgCard, borderRadius: 12,
                  border: `1px solid ${hovered === 1 ? p.accentBorder : p.border}`,
                  boxShadow: hovered === 1 ? p.shadowHover : p.shadow,
                  padding: '10px', height: 120,
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                }}
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: 7, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.accent, marginBottom: 6 }}>On This Day</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 11, fontWeight: 700, color: p.text, lineHeight: 1.2, marginBottom: 4 }}>Rosa Parks</div>
                <p style={{ color: p.textMuted, fontSize: 8, lineHeight: 1.5, fontFamily: 'Inter, sans-serif' }}>Civil rights icon who refused to give up her seat.</p>
              </div>
            </div>
          </div>

          {/* Ticker strip */}
          <div style={{
            background: p.bgElevated,
            borderTop: `1px solid ${p.border}`,
            padding: '6px 16px',
            display: 'flex', alignItems: 'center', gap: 12, overflow: 'hidden',
          }}>
            {['Civilisation Began in Africa', 'The Moors — 781 Years in Europe', 'Rock & Roll Has Black Roots'].map((t, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: 7, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.textFaint }}>{t}</span>
                <span style={{ color: p.accent, fontSize: 6 }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Palette chips footer */}
      <div style={{
        background: p.bgCard,
        borderTop: `1px solid ${p.border}`,
        padding: '12px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 700, color: p.text, marginBottom: 2 }}>{p.name}</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: p.textMuted }}>{p.tagline}</div>
        </div>
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          {[p.bg, p.bgCard, p.text, p.accent, p.textMuted].map((c, i) => (
            <div key={i} style={{
              width: 16, height: 16, borderRadius: '50%', background: c,
              border: `1.5px solid ${p.border}`,
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ColorPreview() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const chosen = palettes.find(p => p.id === selected);

  return (
    <div style={{
      minHeight: '100vh', background: '#F5F5F5',
      padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem)',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 40, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '4px 14px', borderRadius: 99,
            background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.10)',
            marginBottom: 16,
          }}>
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#666' }}>
              Color Palette Preview
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700,
            color: '#111', letterSpacing: '-0.02em', marginBottom: 12,
          }}>
            Pick your color scheme
          </h1>
          <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.65, maxWidth: '50ch', margin: '0 auto' }}>
            Each preview shows a real mockup of the app — sidebar, hero, cards, and ticker strip. Hover over cards to see interaction states.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginBottom: 36 }}>
          {palettes.map(p => (
            <PaletteMockup
              key={p.id}
              p={p}
              selected={selected === p.id}
              onSelect={setSelected}
            />
          ))}
        </div>

        {/* Apply button */}
        <div style={{ textAlign: 'center' }}>
          {selected ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ color: '#444', fontSize: '0.9rem' }}>
                Selected: <strong style={{ color: '#111' }}>{chosen?.name}</strong>
              </div>
              <button
                onClick={() => navigate('/?apply=' + selected)}
                style={{
                  background: chosen?.accent, color: '#fff',
                  border: 'none', borderRadius: 99, padding: '0.85rem 2.5rem',
                  fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  boxShadow: `0 4px 20px ${chosen?.accentDim}`,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Apply "{chosen?.name}" to the whole site <ArrowRight size={16} />
              </button>
              <button
                onClick={() => setSelected(null)}
                style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.82rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
              >
                Choose a different palette
              </button>
            </div>
          ) : (
            <p style={{ color: '#999', fontSize: '0.88rem' }}>Click any palette above to select it</p>
          )}
        </div>
      </div>
    </div>
  );
}
