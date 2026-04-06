import { useState, useEffect } from 'react';

const eraColors = {
  'Civil Rights':   { bg: '#0d1f2d', accent: '#4d8c90' },
  'Science':        { bg: '#0a1a3d', accent: '#5a9fd5' },
  'Invention':      { bg: '#1a1200', accent: '#c6a84b' },
  'Medicine':       { bg: '#0a2a1a', accent: '#4caf50' },
  'Technology':     { bg: '#1a0a3d', accent: '#9c6add' },
  'Engineering':    { bg: '#0a1a2a', accent: '#5aabcc' },
  'Pan-Africanism': { bg: '#0a2200', accent: '#c6a84b' },
  'Athletics':      { bg: '#1a0d00', accent: '#e8963a' },
  'Aviation':       { bg: '#001a2a', accent: '#6ab8dd' },
  'default':        { bg: '#111820', accent: '#3c6e71' },
};

// Module-level cache — persists across re-renders, cleared on page refresh
const wikiCache = {};

async function fetchWikiThumb(name) {
  if (wikiCache[name] !== undefined) return wikiCache[name];
  try {
    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(name)}&prop=pageimages&format=json&pithumbsize=500&origin=*`,
      { signal: AbortSignal.timeout(6000) }
    );
    const data = await res.json();
    const page = Object.values(data.query.pages)[0];
    const url = page?.thumbnail?.source ?? null;
    wikiCache[name] = url;
    return url;
  } catch {
    wikiCache[name] = null;
    return null;
  }
}

function hashStr(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  return Math.abs(h);
}

export function aiPortraitUrl(name, era) {
  const seed = hashStr(name);
  const prompt = encodeURIComponent(
    `portrait of ${name}, ${era} historical figure, Black American, dignified, realistic oil painting, detailed face, warm studio lighting`
  );
  return `https://image.pollinations.ai/prompt/${prompt}?seed=${seed}&width=480&height=600&model=flux-schnell&nologo=true`;
}

function Monogram({ name, era, style, className }) {
  const colors = eraColors[era] || eraColors.default;
  const initials = name.split(' ').filter(w => w.length > 2).slice(-2).map(w => w[0]).join('');
  return (
    <div
      className={className}
      style={{
        ...style,
        objectFit: undefined, objectPosition: undefined,
        background: `linear-gradient(145deg, ${colors.bg} 0%, #0d0d0d 100%)`,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 0, overflow: 'hidden',
      }}
    >
      <div style={{
        width: '44%', aspectRatio: '1', borderRadius: '50%',
        border: `2px solid ${colors.accent}55`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `${colors.accent}22`,
        fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '36%',
        color: '#fff', letterSpacing: '0.04em', lineHeight: 1, flexShrink: 0,
      }}>
        {initials}
      </div>
      <div style={{
        marginTop: '8%', color: colors.accent, fontSize: '11%',
        letterSpacing: '0.14em', textTransform: 'uppercase',
        fontFamily: "'Roboto Mono', monospace", fontWeight: 500, opacity: 0.85,
        textAlign: 'center', padding: '0 8%', lineHeight: 1.3, wordBreak: 'break-word',
      }}>
        {era}
      </div>
    </div>
  );
}

export default function FigureImage({ src, name, era, style = {}, className = '' }) {
  // null = loading, string = url to use, false = all failed
  const [imgSrc, setImgSrc] = useState(null);
  const [aiMode, setAiMode] = useState(false);
  const [allFailed, setAllFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setImgSrc(null);
    setAiMode(false);
    setAllFailed(false);

    fetchWikiThumb(name).then(url => {
      if (cancelled) return;
      if (url) {
        setImgSrc(url);
      } else {
        // No Wikipedia photo — go straight to AI
        setAiMode(true);
        setImgSrc(aiPortraitUrl(name, era));
      }
    });

    return () => { cancelled = true; };
  }, [name, era]);

  if (allFailed) return <Monogram name={name} era={era} style={style} className={className} />;

  // Loading skeleton
  if (imgSrc === null) {
    const colors = eraColors[era] || eraColors.default;
    return (
      <div
        className={className}
        style={{
          ...style,
          objectFit: undefined, objectPosition: undefined,
          background: `linear-gradient(145deg, ${colors.bg} 0%, #0d0d0d 100%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          border: `3px solid ${colors.accent}44`,
          borderTopColor: colors.accent,
          animation: 'spin 0.9s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={name}
      className={className}
      style={style}
      onError={() => {
        if (!aiMode) {
          // Wikipedia image failed — try AI
          setAiMode(true);
          setImgSrc(aiPortraitUrl(name, era));
        } else {
          // AI also failed — show monogram
          setAllFailed(true);
        }
      }}
    />
  );
}
