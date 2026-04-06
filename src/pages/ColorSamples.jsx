// Color direction samples — pick your favorite palette

const palettes = [
  {
    id: 'obsidian-gold',
    name: 'Obsidian & Gold',
    tagline: 'Deep black canvas, warm gold accent — prestige editorial',
    dark: {
      bg: '#0A0A0C',
      card: '#131316',
      elevated: '#1C1C22',
      border: 'rgba(255,255,255,0.07)',
      text: '#F0EDE6',
      muted: '#8A8680',
      gold: '#D4AF37',
      goldDim: 'rgba(212,175,55,0.12)',
      accent2: '#8B5E3C',
    },
    light: {
      bg: '#F5F1EB',
      card: '#FFFFFF',
      elevated: '#EDE8DF',
      border: 'rgba(0,0,0,0.08)',
      text: '#1A1208',
      muted: '#6B5D48',
      gold: '#A07810',
      goldDim: 'rgba(160,120,16,0.10)',
      accent2: '#8B5E3C',
    },
  },
  {
    id: 'midnight-amber',
    name: 'Midnight & Amber',
    tagline: 'Deep navy base, warm amber — academic + digital',
    dark: {
      bg: '#080C14',
      card: '#0F1520',
      elevated: '#172030',
      border: 'rgba(255,255,255,0.06)',
      text: '#E8EBF2',
      muted: '#7A8499',
      gold: '#E8A020',
      goldDim: 'rgba(232,160,32,0.10)',
      accent2: '#3A6EA5',
    },
    light: {
      bg: '#F4F6FB',
      card: '#FFFFFF',
      elevated: '#E8EDF6',
      border: 'rgba(10,20,60,0.08)',
      text: '#0A1428',
      muted: '#4A5670',
      gold: '#C07010',
      goldDim: 'rgba(192,112,16,0.10)',
      accent2: '#1A4A80',
    },
  },
  {
    id: 'ebony-crimson',
    name: 'Ebony & Crimson',
    tagline: 'Rich dark ebony, bold crimson — cultural + powerful',
    dark: {
      bg: '#0C0808',
      card: '#160E0E',
      elevated: '#1E1212',
      border: 'rgba(255,255,255,0.06)',
      text: '#F0E8E8',
      muted: '#907878',
      gold: '#D4AF37',
      goldDim: 'rgba(212,175,55,0.10)',
      accent2: '#C0392B',
    },
    light: {
      bg: '#FBF7F6',
      card: '#FFFFFF',
      elevated: '#F0E8E6',
      border: 'rgba(60,10,10,0.08)',
      text: '#1A0808',
      muted: '#6B4040',
      gold: '#A07810',
      goldDim: 'rgba(160,120,16,0.10)',
      accent2: '#A01820',
    },
  },
];

function PaletteCard({ palette, mode }) {
  const c = palette[mode];
  const isLight = mode === 'light';

  return (
    <div style={{
      background: c.bg,
      borderRadius: 20,
      overflow: 'hidden',
      border: `1px solid ${c.border}`,
      boxShadow: isLight
        ? '0 4px 24px rgba(0,0,0,0.10)'
        : '0 4px 24px rgba(0,0,0,0.5)',
      minWidth: 0,
    }}>
      {/* Header bar */}
      <div style={{
        background: c.card,
        borderBottom: `1px solid ${c.border}`,
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        {/* Dot menu */}
        {['#FF5F57','#FFBD2E','#28C840'].map(col => (
          <div key={col} style={{ width: 10, height: 10, borderRadius: '50%', background: col, opacity: 0.7 }} />
        ))}
        <div style={{
          marginLeft: 'auto',
          fontFamily: 'Roboto Mono, monospace',
          fontSize: 10,
          color: c.muted,
          letterSpacing: '0.08em',
        }}>
          {mode.toUpperCase()}
        </div>
      </div>

      <div style={{ padding: '18px 18px 20px' }}>
        {/* Sidebar strip mock */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
          <div style={{
            width: 52,
            background: c.card,
            borderRadius: 10,
            border: `1px solid ${c.border}`,
            padding: '10px 8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}>
            {[c.gold, c.muted, c.muted, c.muted].map((col, i) => (
              <div key={i} style={{ width: 22, height: 4, borderRadius: 9999, background: i === 0 ? c.gold : c.muted, opacity: i === 0 ? 1 : 0.4 }} />
            ))}
          </div>

          {/* Main content area */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Hero card */}
            <div style={{
              background: c.card,
              borderRadius: 12,
              border: `1px solid ${c.border}`,
              padding: '12px 14px',
            }}>
              {/* Gold overline */}
              <div style={{
                fontFamily: 'Roboto Mono, monospace',
                fontSize: 9,
                letterSpacing: '0.14em',
                color: c.gold,
                textTransform: 'uppercase',
                marginBottom: 6,
              }}>
                Historical Figure
              </div>
              {/* Name */}
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 16,
                fontWeight: 700,
                color: c.text,
                lineHeight: 1.2,
                marginBottom: 4,
              }}>
                Frederick Douglass
              </div>
              {/* Bio snippet */}
              <div style={{
                fontSize: 10,
                color: c.muted,
                lineHeight: 1.5,
                marginBottom: 10,
              }}>
                Abolitionist, author &amp; statesman — 1818–1895
              </div>
              {/* Pill tags */}
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                {['Abolitionist','Civil Rights'].map(tag => (
                  <div key={tag} style={{
                    background: c.goldDim,
                    color: c.gold,
                    fontSize: 9,
                    fontFamily: 'Roboto Mono, monospace',
                    letterSpacing: '0.08em',
                    padding: '3px 9px',
                    borderRadius: 9999,
                    border: `1px solid ${c.gold}22`,
                  }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Stat row */}
            <div style={{ display: 'flex', gap: 8 }}>
              {[['162', 'Figures'], ['16', 'Themes'], ['12', 'Quizzes']].map(([val, lbl]) => (
                <div key={lbl} style={{
                  flex: 1,
                  background: c.elevated,
                  borderRadius: 10,
                  border: `1px solid ${c.border}`,
                  padding: '8px 10px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: c.gold }}>{val}</div>
                  <div style={{ fontSize: 8, color: c.muted, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Roboto Mono, monospace' }}>{lbl}</div>
                </div>
              ))}
            </div>

            {/* Accent color pill — shows secondary accent */}
            <div style={{
              background: c.accent2 + '18',
              border: `1px solid ${c.accent2}44`,
              borderRadius: 10,
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: c.accent2, flexShrink: 0 }} />
              <div style={{ fontSize: 9, color: c.text, opacity: 0.7, fontFamily: 'Inter, sans-serif' }}>
                Accent color — used for era badges, links, highlights
              </div>
            </div>
          </div>
        </div>

        {/* Button row */}
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{
            flex: 1,
            background: c.gold,
            color: isLight ? '#1A1208' : '#0A0806',
            borderRadius: 9999,
            padding: '8px 0',
            textAlign: 'center',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.06em',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase',
          }}>
            Explore
          </div>
          <div style={{
            flex: 1,
            border: `1.5px solid ${c.gold}`,
            color: c.gold,
            borderRadius: 9999,
            padding: '8px 0',
            textAlign: 'center',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.06em',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase',
          }}>
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ColorSamples() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '48px 32px 64px',
      background: '#0F0F12',
      fontFamily: 'Inter, sans-serif',
    }}>
      {/* Header */}
      <div style={{ maxWidth: 960, margin: '0 auto 40px' }}>
        <div style={{
          fontFamily: 'Roboto Mono, monospace',
          fontSize: 11,
          letterSpacing: '0.16em',
          color: '#D4AF37',
          textTransform: 'uppercase',
          marginBottom: 10,
        }}>
          Color Direction Preview
        </div>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 32,
          fontWeight: 700,
          color: '#F0EDE6',
          marginBottom: 10,
          lineHeight: 1.2,
        }}>
          Choose Your Visual Direction
        </h1>
        <p style={{ color: '#7A7670', fontSize: 14, maxWidth: 560, lineHeight: 1.7 }}>
          Each palette shows dark &amp; light modes with real UI elements — sidebar, cards, buttons, tags, and accent colors.
          Pick the one that feels right for Loveblaq Connect.
        </p>
      </div>

      {/* Palette rows */}
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
        {palettes.map((palette) => (
          <div key={palette.id}>
            {/* Palette label */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                {/* Color dots */}
                <div style={{ display: 'flex', gap: 5 }}>
                  {['dark','light'].map(m => (
                    <div key={m} style={{ display: 'flex', gap: 3 }}>
                      {[palette[m].bg, palette[m].card, palette[m].gold, palette[m].accent2].map((col, i) => (
                        <div key={i} style={{ width: 14, height: 14, borderRadius: '50%', background: col, border: '1.5px solid rgba(255,255,255,0.1)' }} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 20,
                fontWeight: 700,
                color: '#F0EDE6',
                margin: 0,
              }}>
                {palette.name}
              </h2>
              <p style={{ color: '#7A7670', fontSize: 12, margin: '3px 0 0', fontStyle: 'italic' }}>
                {palette.tagline}
              </p>
            </div>

            {/* Dark + Light side by side */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <PaletteCard palette={palette} mode="dark" />
              <PaletteCard palette={palette} mode="light" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div style={{ maxWidth: 960, margin: '48px auto 0', textAlign: 'center' }}>
        <p style={{ color: '#4A4844', fontSize: 12, lineHeight: 1.6 }}>
          Tell me which direction you prefer — or mix: e.g. "Option 1 dark mode + Option 2 light mode"
        </p>
      </div>
    </div>
  );
}
