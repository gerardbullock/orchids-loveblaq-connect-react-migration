import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Download, RefreshCw, X, ChevronDown, ImageIcon, Wand2 } from 'lucide-react';

const SIZES = [
  { label: 'Portrait',  w: 768,  h: 1024 },
  { label: 'Square',    w: 1024, h: 1024 },
  { label: 'Landscape', w: 1024, h: 768  },
  { label: 'Wide',      w: 1280, h: 720  },
];

// Style suffix appended to every prompt to achieve the painterly cinematic look
const STYLE_SUFFIX = 'cinematic oil painting portrait style, dramatic chiaroscuro lighting, deep rich dark background with warm amber and golden light illuminating the subject, highly detailed face and hands, painterly brushwork, museum quality fine art, dignified and powerful composition, photorealistic yet painterly, Rembrandt lighting, 8k resolution';

const PRESETS = [
  {
    label: 'Harriet Tubman',
    icon: '🕊️',
    prompt: 'Harriet Tubman holding a lantern in a dark forest at night, determined expression, worn period clothing, stars visible through trees, freedom',
  },
  {
    label: 'MLK Jr.',
    icon: '✊',
    prompt: 'Martin Luther King Jr. delivering a speech at a podium, crowd behind him, passionate expression, suit and tie, Washington Monument visible',
  },
  {
    label: 'Maya Angelou',
    icon: '📖',
    prompt: 'Maya Angelou seated at a writing desk surrounded by books, wise and serene expression, warm library light, bookshelves in background',
  },
  {
    label: 'African Royalty',
    icon: '👑',
    prompt: 'African queen in magnificent traditional royal regalia, gold jewelry and crown, ornate palace interior, regal and powerful expression',
  },
  {
    label: 'Jazz Musician',
    icon: '🎷',
    prompt: 'Black jazz musician playing trumpet on stage, moody club atmosphere, smoke and spotlight, 1950s Harlem, soulful expression, vintage microphone',
  },
  {
    label: 'Civil Rights March',
    icon: '🚶',
    prompt: 'Black Americans marching for civil rights, American flags, determined faces, city street, 1960s, powerful crowd, unity and dignity',
  },
  {
    label: 'Buffalo Soldier',
    icon: '⚔️',
    prompt: 'Buffalo Soldier in full US Army uniform, 1880s American West, horse in background, proud and stoic expression, medals on chest',
  },
  {
    label: 'Space Pioneer',
    icon: '🚀',
    prompt: 'Black NASA astronaut in full spacesuit, visor reflecting Earth from orbit, heroic pose, stars behind them, pride and determination',
  },
];

// Calls go to /api/replicate which Vite proxies to api.replicate.com
// and injects the Authorization header server-side — no CORS, no token in browser.
async function runReplicate(prompt, size) {
  const fullPrompt = `${prompt.trim()}, ${STYLE_SUFFIX}`;
  // Create prediction
  const createRes = await fetch('/api/replicate/v1/models/black-forest-labs/flux-schnell/predictions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Prefer': 'wait=5',
    },
    body: JSON.stringify({
      input: {
        prompt: fullPrompt,
        width: size.w,
        height: size.h,
        num_outputs: 1,
        output_format: 'webp',
        output_quality: 90,
      },
    }),
  });

  if (!createRes.ok) {
    const err = await createRes.json().catch(() => ({}));
    throw new Error(err?.detail || err?.error || `API error ${createRes.status} — check REPLICATE_API_TOKEN in .env`);
  }

  let prediction = await createRes.json();

  // If already succeeded (Prefer: wait=5 resolved it), return immediately
  if (prediction.status === 'succeeded') {
    const output = prediction.output;
    const url = Array.isArray(output) ? output[0] : output;
    if (!url) throw new Error('No image returned');
    return url;
  }

  // Poll until done (max 90s)
  const start = Date.now();
  while (prediction.status !== 'succeeded' && prediction.status !== 'failed' && prediction.status !== 'canceled') {
    if (Date.now() - start > 90000) throw new Error('Generation timed out after 90s');
    await new Promise(r => setTimeout(r, 1500));
    const pollRes = await fetch(`/api/replicate/v1/predictions/${prediction.id}`);
    if (!pollRes.ok) throw new Error(`Poll error ${pollRes.status}`);
    prediction = await pollRes.json();
  }

  if (prediction.status !== 'succeeded') {
    throw new Error(prediction.error || 'Generation failed');
  }

  const output = prediction.output;
  const url = Array.isArray(output) ? output[0] : output;
  if (!url) throw new Error('No image returned');
  return url;
}

export default function AIStudio() {
  const [prompt,   setPrompt]   = useState('');
  const [size,     setSize]     = useState(SIZES[0]);
  const [imgUrl,   setImgUrl]   = useState(null);
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState(null);
  const [history,  setHistory]  = useState([]);

  function applyPreset(preset) {
    setPrompt(preset.prompt);
  }

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);
    setImgUrl(null);
    try {
      const url = await runReplicate(prompt, size);
      setImgUrl(url);
      setHistory(prev => [{ url, prompt, size }, ...prev.slice(0, 11)]);
    } catch (e) {
      setError(e.message || 'Generation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function regenerate() {
    await generate();
  }

  function downloadImage() {
    if (!imgUrl) return;
    const a = document.createElement('a');
    a.href = imgUrl;
    a.download = `loveblaq-ai-${Date.now()}.webp`;
    a.target = '_blank';
    a.click();
  }

  const canGenerate = prompt.trim().length > 0;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>

      {/* ── Header ─────────────────────────────────────────── */}
      <div style={{
        background: '#284b63',
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem) clamp(2rem, 4vw, 3.5rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, right: -40, width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(60,110,113,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: '20%', width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 24, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4d8c90' }}>Powered by Replicate · flux-schnell</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#fff', marginBottom: 10, lineHeight: 1.05 }}>
            AI Image Studio
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '52ch', margin: '0 0 16px' }}>
            Generate painterly cinematic portraits of Black historical figures. Every image is rendered in a rich oil painting style with dramatic lighting.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(60,110,113,0.18)', border: '1px solid rgba(60,110,113,0.35)', borderRadius: 99, padding: '6px 14px' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#3c6e71' }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
              Cinematic oil painting · Rembrandt lighting · Auto-applied to all generations
            </span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 28, alignItems: 'start' }}>

          {/* ── Left: Controls ──────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Prompt */}
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 16, padding: '20px 22px', boxShadow: '0 2px 8px rgba(53,53,53,0.06)' }}>
              <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#353535', marginBottom: 10, letterSpacing: '-0.01em' }}>
                Prompt
              </label>
              <textarea
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="Describe the image you want to generate… e.g. 'dignified oil painting portrait of a Black civil rights leader, 1960s, detailed, warm lighting'"
                rows={4}
                style={{
                  width: '100%', resize: 'vertical',
                  background: 'var(--bg)', border: '1.5px solid var(--border)',
                  borderRadius: 10, padding: '12px 14px',
                  fontFamily: 'Inter, sans-serif', fontSize: '0.88rem',
                  color: '#353535', lineHeight: 1.6,
                  outline: 'none', transition: 'border-color 0.18s',
                  boxSizing: 'border-box',
                }}
                onFocus={e => e.target.style.borderColor = '#3c6e71'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 6 }}>
                <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', color: 'var(--text-faint)' }}>
                  {prompt.length} chars
                </span>
              </div>
            </div>

            {/* Presets */}
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 16, padding: '20px 22px', boxShadow: '0 2px 8px rgba(53,53,53,0.06)' }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#353535', marginBottom: 12, letterSpacing: '-0.01em' }}>
                Quick Presets
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 8 }}>
                {PRESETS.map(preset => (
                  <button
                    key={preset.label}
                    onClick={() => applyPreset(preset)}
                    style={{
                      background: prompt === preset.prompt ? 'rgba(60,110,113,0.10)' : 'var(--bg)',
                      border: `1.5px solid ${prompt === preset.prompt ? '#3c6e71' : 'var(--border)'}`,
                      borderRadius: 10,
                      padding: '9px 12px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s',
                      display: 'flex', alignItems: 'center', gap: 7,
                    }}
                    onMouseEnter={e => { if (prompt !== preset.prompt) e.currentTarget.style.borderColor = '#3c6e71'; }}
                    onMouseLeave={e => { if (prompt !== preset.prompt) e.currentTarget.style.borderColor = 'var(--border)'; }}
                  >
                    <span style={{ fontSize: '1rem', lineHeight: 1, flexShrink: 0 }}>{preset.icon}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#353535', lineHeight: 1.25 }}>
                      {preset.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 16, padding: '20px 22px', boxShadow: '0 2px 8px rgba(53,53,53,0.06)' }}>
              <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#353535', marginBottom: 12 }}>Output Size</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {SIZES.map(s => (
                  <button
                    key={s.label}
                    onClick={() => setSize(s)}
                    style={{
                      background: size.label === s.label ? 'rgba(60,110,113,0.10)' : 'transparent',
                      border: `1.5px solid ${size.label === s.label ? '#3c6e71' : 'var(--border)'}`,
                      borderRadius: 10, padding: '10px 12px',
                      cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s',
                    }}
                  >
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: size.label === s.label ? '#3c6e71' : '#353535' }}>{s.label}</div>
                    <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', color: 'var(--text-faint)', marginTop: 2 }}>{s.w} × {s.h}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate button */}
            <motion.button
              onClick={generate}
              disabled={!canGenerate || loading}
              whileHover={canGenerate && !loading ? { scale: 1.02 } : {}}
              whileTap={canGenerate && !loading ? { scale: 0.98 } : {}}
              style={{
                width: '100%', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 10,
                background: canGenerate && !loading ? '#3c6e71' : 'var(--border)',
                color: canGenerate && !loading ? '#fff' : 'var(--text-faint)',
                border: 'none', borderRadius: 14,
                padding: '1.1rem 1.5rem',
                fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem', fontWeight: 800,
                letterSpacing: '-0.01em', cursor: canGenerate && !loading ? 'pointer' : 'not-allowed',
                transition: 'background 0.2s',
              }}
            >
              {loading
                ? <><RefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} /> Generating…</>
                : <><Wand2 size={18} /> Generate Image</>
              }
            </motion.button>
          </div>

          {/* ── Right: Output ────────────────────────────────── */}
          <div style={{ position: 'sticky', top: 24 }}>
            <div style={{
              background: '#fff', border: '1px solid var(--border)',
              borderRadius: 18, overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(53,53,53,0.08)',
              minHeight: 420,
              display: 'flex', flexDirection: 'column',
            }}>
              {/* Output area */}
              <div style={{
                flex: 1, position: 'relative',
                background: 'var(--bg)', minHeight: 380,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <AnimatePresence mode="wait">
                  {!imgUrl && !loading ? (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      style={{ textAlign: 'center', padding: '2rem' }}
                    >
                      <ImageIcon size={48} color="var(--text-faint)" style={{ margin: '0 auto 16px' }} />
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        Your generated image will appear here.<br />
                        <span style={{ color: 'var(--text-faint)', fontSize: '0.8rem' }}>Choose a preset or write a custom prompt.</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="image"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      style={{ width: '100%', position: 'relative' }}
                    >
                      {/* Loading overlay */}
                      {loading && (
                        <div style={{
                          position: 'absolute', inset: 0, zIndex: 2,
                          background: 'rgba(245,246,247,0.85)',
                          display: 'flex', flexDirection: 'column',
                          alignItems: 'center', justifyContent: 'center',
                          backdropFilter: 'blur(4px)',
                          minHeight: 380,
                        }}>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                            style={{ marginBottom: 14, color: '#3c6e71' }}
                          >
                            <Sparkles size={32} />
                          </motion.div>
                          <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#353535', marginBottom: 4 }}>Generating your image…</div>
                          <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.62rem', color: 'var(--text-muted)' }}>This may take a few seconds</div>
                        </div>
                      )}
                      {imgUrl && (
                        <img
                          src={imgUrl}
                          alt="AI generated"
                          style={{ width: '100%', display: 'block' }}
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {error && (
                  <div style={{
                    position: 'absolute', bottom: 12, left: 12, right: 12,
                    background: '#fee2e2', border: '1px solid #fca5a5',
                    borderRadius: 10, padding: '10px 14px',
                    fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
                    color: '#991b1b', display: 'flex', gap: 8, alignItems: 'center',
                  }}>
                    <X size={14} /> {error}
                  </div>
                )}
              </div>

              {/* Action bar */}
              {imgUrl && !loading && (
                <div style={{
                  padding: '12px 16px',
                  borderTop: '1px solid var(--border)',
                  display: 'flex', gap: 8,
                }}>
                  <button
                    onClick={regenerate}
                    style={{
                      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: 6, background: 'var(--bg)', border: '1.5px solid var(--border)',
                      borderRadius: 10, padding: '8px 14px',
                      fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600,
                      color: '#353535', cursor: 'pointer', transition: 'border-color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#3c6e71'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <RefreshCw size={13} /> New Variation
                  </button>
                  <button
                    onClick={downloadImage}
                    style={{
                      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: 6, background: '#3c6e71', border: 'none',
                      borderRadius: 10, padding: '8px 14px',
                      fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 700,
                      color: '#fff', cursor: 'pointer',
                    }}
                  >
                    <Download size={13} /> Download
                  </button>
                </div>
              )}
            </div>

            {/* Prompt used */}
            {imgUrl && !loading && (
              <div style={{ marginTop: 12, background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '12px 14px' }}>
                <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.56rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3c6e71', marginBottom: 5, fontWeight: 600 }}>Used Prompt</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>{prompt}</p>
                <div style={{ marginTop: 6, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', color: 'var(--text-faint)' }}>{size.w}×{size.h}</span>
                  <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', color: 'var(--text-faint)' }}>· flux-schnell</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── History ───────────────────────────────────────── */}
        <AnimatePresence>
          {history.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ marginTop: 36 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.95rem', color: '#353535', letterSpacing: '-0.01em' }}>Session History</span>
                <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', color: 'var(--text-faint)' }}>{history.length} image{history.length !== 1 ? 's' : ''}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 14 }}>
                {history.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    style={{
                      background: '#fff', borderRadius: 12,
                      border: '1px solid var(--border)',
                      overflow: 'hidden', cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(53,53,53,0.06)',
                      transition: 'box-shadow 0.2s, transform 0.2s',
                    }}
                    onClick={() => { setImgUrl(item.url); setPrompt(item.prompt); setSeed(item.seed); setModel(item.model); setSize(item.size); }}
                    whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(53,53,53,0.14)' }}
                  >
                    <img src={item.url} alt={`History ${i}`} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }} />
                    <div style={{ padding: '8px 10px' }}>
                      <p className="line-clamp-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', color: 'var(--text-muted)', lineHeight: 1.45, margin: 0 }}>{item.prompt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
