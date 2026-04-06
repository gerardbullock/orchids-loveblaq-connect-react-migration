import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { motion } from 'framer-motion';
import { figures, timeline_events } from '../data/figures';
import { useNavigate } from 'react-router-dom';

const goldIcon = L.divIcon({
  className: '',
  html: `<div style="
    width:26px;height:26px;border-radius:50% 50% 50% 0;
    background:linear-gradient(135deg,#B8860B,#DAA520,#F2C94C);
    border:2px solid rgba(0,0,0,0.6);
    transform:rotate(-45deg);
    box-shadow:0 3px 14px rgba(218,165,32,0.55);
  "></div>`,
  iconSize: [26, 26],
  iconAnchor: [13, 26],
  popupAnchor: [0, -30],
});

const eventIcon = L.divIcon({
  className: '',
  html: `<div style="
    width:20px;height:20px;border-radius:50%;
    background:rgba(218,165,32,0.12);
    border:2px solid #DAA520;
    box-shadow:0 0 16px rgba(218,165,32,0.5);
    display:flex;align-items:center;justify-content:center;
  "><div style="width:7px;height:7px;border-radius:50%;background:#DAA520;box-shadow:0 0 4px rgba(218,165,32,0.8);"></div></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -14],
});

const layers = [
  { key: 'both',    label: 'All Markers' },
  { key: 'figures', label: 'Birthplaces' },
  { key: 'events',  label: 'Events' },
];

export default function MapPage() {
  const [layer, setLayer] = useState('both');
  const navigate = useNavigate();

  const showFigures = layer === 'both' || layer === 'figures';
  const showEvents  = layer === 'both' || layer === 'events';

  return (
    <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem) clamp(1.25rem, 4vw, 2.5rem) 0', height: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 18, flexShrink: 0 }}>
        <div className="section-label" style={{ marginBottom: 6 }}>Interactive</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
          <div>
            <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--text)', marginBottom: 4 }}>Historical Map</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>
              Explore birthplaces and key events across the African diaspora
            </p>
          </div>

          {/* Layer toggle */}
          <div style={{ display: 'flex', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, padding: 3, gap: 2 }}>
            {layers.map(({ key, label }) => (
              <button key={key} onClick={() => setLayer(key)} style={{
                padding: '6px 14px', borderRadius: 8, fontSize: 12.5, cursor: 'pointer',
                border: 'none', fontFamily: 'Inter, sans-serif', fontWeight: layer === key ? 600 : 400,
                background: layer === key ? 'linear-gradient(135deg, var(--gold-dark), var(--gold))' : 'transparent',
                color: layer === key ? '#fff' : 'var(--text-muted)',
                transition: 'all 0.15s', whiteSpace: 'nowrap',
              }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 20, marginTop: 12, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--text-muted)', fontSize: 12.5 }}>
            <div style={{ width: 11, height: 11, borderRadius: '50% 50% 50% 0', background: 'var(--gold)', transform: 'rotate(-45deg)', flexShrink: 0 }} />
            Figure Birthplaces
            <span style={{ color: 'var(--gold)', fontWeight: 600, fontSize: 12 }}>({figures.length})</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--text-muted)', fontSize: 12.5 }}>
            <div style={{ width: 13, height: 13, borderRadius: '50%', border: '2px solid var(--gold)', background: 'var(--gold-dim)', flexShrink: 0 }} />
            Historical Events
            <span style={{ color: 'var(--gold)', fontWeight: 600, fontSize: 12 }}>({timeline_events.length})</span>
          </div>
          <div style={{ color: 'var(--text-faint)', fontSize: 12, marginLeft: 'auto' }}>
            Click any marker to view details
          </div>
        </div>
      </motion.div>

      {/* Map */}
      <div style={{
        flex: 1, borderRadius: 16, overflow: 'hidden',
        border: '1px solid var(--border-gold)', marginBottom: 24,
        boxShadow: 'var(--gold-glow-sm)',
      }}>
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: '100%', width: '100%' }}
          zoomControl={true}
          minZoom={2}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {showFigures && figures.map(fig => fig.lat && fig.lng ? (
            <Marker key={fig.id} position={[fig.lat, fig.lng]} icon={goldIcon}>
              <Popup maxWidth={230}>
                <div style={{ fontFamily: 'Inter, sans-serif', minWidth: 200 }}>
                  <div style={{ position: 'relative', height: 100, overflow: 'hidden', borderRadius: '8px 8px 0 0', margin: '-4px -4px 10px', background: 'var(--bg-elevated)' }}>
                    <img
                      src={fig.image_url}
                      alt={fig.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(20%) brightness(0.85)' }}
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))' }} />
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--gold)', fontSize: 14, marginBottom: 3 }}>{fig.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 11, marginBottom: 8 }}>
                    {fig.birthplace} · {fig.born}{fig.died ? `–${fig.died}` : ''}
                  </div>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 10 }}>
                    {fig.tags.slice(0, 2).map(t => (
                      <span key={t} style={{ background: 'var(--gold-dim)', color: 'var(--gold)', border: '1px solid var(--border-gold)', padding: '2px 8px', borderRadius: 10, fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate(`/figure/${fig.id}`)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))',
                      color: '#fff', border: 'none', borderRadius: 8, padding: '6px 12px',
                      fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                      width: '100%', justifyContent: 'center',
                    }}
                  >
                    View Full Profile →
                  </button>
                </div>
              </Popup>
            </Marker>
          ) : null)}

          {showEvents && timeline_events.map(ev => (
            <Marker key={ev.id} position={[ev.lat, ev.lng]} icon={eventIcon}>
              <Popup maxWidth={240}>
                <div style={{ fontFamily: 'Inter, sans-serif', minWidth: 200 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: 'var(--gold)', fontSize: 18, fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>{ev.year}</span>
                    <span style={{ background: 'var(--gold-dim)', color: 'var(--gold)', border: '1px solid var(--border-gold)', padding: '2px 8px', borderRadius: 10, fontSize: 9, fontWeight: 600, textTransform: 'uppercase' }}>{ev.category}</span>
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--text)', fontSize: 13.5, marginBottom: 8, lineHeight: 1.3 }}>{ev.title}</div>
                  <p style={{ color: 'var(--text-muted)', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{ev.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
