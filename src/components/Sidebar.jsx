import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, Users, Map, Brain, BookOpen, Trophy,
  Zap, Star, Menu, X, Sun, Moon, Lightbulb, Music2, Castle, Wand2, Waves, Flame, Building2,
  Wheat, Landmark, Scale, Factory, Vote, Newspaper,
} from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useMediaQuery } from '../hooks/useMediaQuery';

const navItems = [
  { to: '/',          icon: Home,      label: 'Home' },
  { to: '/figures',   icon: Users,     label: 'Figures' },
  { to: '/inventors', icon: Lightbulb, label: 'Inventors' },
  { to: '/map',       icon: Map,       label: 'Map' },
  { to: '/quiz',      icon: Brain,     label: 'Quiz' },
  { to: '/learning',  icon: BookOpen,  label: 'Learning' },
  { to: '/stories',   icon: Star,      label: 'Stories' },
  { to: '/origins',   icon: Music2,    label: 'Music Origins' },
  { to: '/black-central-europe', icon: Castle, label: 'Medieval Europe' },
  { to: '/progress',  icon: Trophy,    label: 'Progress' },
  { to: '/drowned-towns',    icon: Waves,    label: 'Drowned Towns' },
  { to: '/devils-punchbowl', icon: Waves,    label: "Devil's Punchbowl" },
  { to: '/rosewood',         icon: Flame,    label: 'Rosewood Massacre' },
  { to: '/black-wall-street',icon: Building2, label: 'Black Wall Street' },
  { to: '/elaine-massacre',  icon: Wheat,     label: 'Elaine Massacre' },
  { to: '/wilmington-coup',  icon: Landmark,  label: 'Wilmington Coup' },
  { to: '/colfax-massacre',  icon: Scale,     label: 'Colfax Massacre' },
  { to: '/east-st-louis',    icon: Factory,   label: 'East St. Louis' },
  { to: '/ocoee-massacre',   icon: Vote,      label: 'Ocoee Massacre' },
  { to: '/atlanta-massacre', icon: Newspaper, label: 'Atlanta Massacre' },
  { to: '/ai-studio',    icon: Wand2,  label: 'AI Studio' },
];

function Logo({ size = 36 }) {
  return (
    <div style={{
      width: size, height: size, flexShrink: 0,
      background: '#3c6e71',
      borderRadius: Math.round(size * 0.28),
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 900, color: '#fff',
      fontSize: Math.round(size * 0.46), letterSpacing: '-0.02em',
      lineHeight: 1,
      boxShadow: '0 2px 12px rgba(60,110,113,0.30)',
    }}>
      L
    </div>
  );
}

function NavContent({ collapsed, onNavClick, isDark, toggle }) {
  return (
    <>
      <nav style={{ flex: 1, padding: '8px 10px', overflowY: 'auto', overflowX: 'hidden' }}>
        {!collapsed && (
          <div style={{
            fontFamily: 'Roboto Mono, monospace',
            fontSize: '0.56rem', fontWeight: 500, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--text-faint)',
            padding: '4px 8px 10px', marginBottom: 2,
          }}>
            Navigation
          </div>
        )}
        {navItems.map(({ to, icon: Icon, label }, i) => (
          <motion.div
            key={to}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.03, duration: 0.18 }}
          >
            <NavLink
              to={to}
              end={to === '/'}
              onClick={onNavClick}
              title={collapsed ? label : undefined}
              style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: 10,
                padding: collapsed ? '9px 0' : '7px 10px',
                justifyContent: collapsed ? 'center' : 'flex-start',
                borderRadius: 9, marginBottom: 1,
                textDecoration: 'none',
                color: isActive ? 'var(--gold)' : 'var(--text-muted)',
                background: isActive ? 'var(--gold-dim)' : 'transparent',
                border: `1px solid ${isActive ? 'var(--border-gold)' : 'transparent'}`,
                fontWeight: isActive ? 600 : 400,
                transition: 'color 0.15s, background 0.15s, border-color 0.15s',
              })}
            >
              {({ isActive }) => (
                <>
                  <span style={{ display: 'flex', flexShrink: 0, opacity: isActive ? 1 : 0.45, transition: 'opacity 0.15s' }}>
                    <Icon size={15} strokeWidth={isActive ? 2 : 1.6} />
                  </span>
                  {!collapsed && (
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem', lineHeight: 1.2,
                      whiteSpace: 'nowrap', overflow: 'hidden',
                      fontWeight: isActive ? 600 : 400,
                    }}>{label}</span>
                  )}
                  {!collapsed && isActive && (
                    <span style={{ marginLeft: 'auto', width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                  )}
                </>
              )}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      {/* Bottom bar */}
      <div style={{ padding: '10px', borderTop: '1px solid var(--sidebar-border)' }}>
        {/* Theme toggle */}
        <button
          onClick={toggle}
          title={isDark ? 'Light Mode' : 'Dark Mode'}
          style={{
            width: '100%', display: 'flex', alignItems: 'center',
            gap: 10, padding: collapsed ? '9px 0' : '8px 10px',
            justifyContent: collapsed ? 'center' : 'flex-start',
            borderRadius: 9, background: 'transparent',
            border: '1px solid var(--border)', color: 'var(--text-muted)',
            cursor: 'pointer', marginBottom: collapsed ? 0 : 8,
            fontFamily: 'Inter, sans-serif', fontSize: '0.78rem',
            transition: 'border-color 0.18s, background 0.18s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-gold)'; e.currentTarget.style.background = 'var(--gold-dim)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent'; }}
        >
          <motion.div
            key={isDark ? 'dark' : 'light'}
            initial={{ rotate: -80, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, type: 'spring', stiffness: 320 }}
            style={{ display: 'flex', flexShrink: 0 }}
          >
            {isDark ? <Sun size={14} color="var(--gold)" /> : <Moon size={14} color="var(--gold)" />}
          </motion.div>
          {!collapsed && (
            <span style={{ whiteSpace: 'nowrap', color: 'var(--text-muted)', fontSize: '0.76rem' }}>
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </span>
          )}
        </button>

        {/* Daily challenge CTA */}
        {!collapsed && (
          <NavLink to="/quiz" style={{ textDecoration: 'none' }}>
            <div
              style={{
                background: 'var(--gold-dim)',
                border: '1px solid var(--border-gold)',
                borderRadius: 11, padding: '11px 13px',
                cursor: 'pointer',
                transition: 'border-color 0.18s, background 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'rgba(184,134,11,0.13)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-gold)'; e.currentTarget.style.background = 'var(--gold-dim)'; }}
            >
              <div style={{
                color: 'var(--gold)', fontSize: '0.58rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4,
                display: 'flex', alignItems: 'center', gap: 5,
                fontFamily: 'Roboto Mono, monospace',
              }}>
                <Zap size={9} fill="var(--gold)" strokeWidth={0} /> Daily Challenge
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', lineHeight: 1.4 }}>
                Test your Black history knowledge
              </div>
            </div>
          </NavLink>
        )}
      </div>
    </>
  );
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggle } = useTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return (
      <>
        {/* Mobile top bar */}
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: 56, zIndex: 60,
          background: 'var(--sidebar-bg)', borderBottom: '1px solid var(--sidebar-border)',
          display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12,
        }}>
          <button
            onClick={() => setMobileOpen(true)}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 6, borderRadius: 8, display: 'flex' }}
          >
            <Menu size={20} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <Logo size={30} />
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, color: 'var(--text)', fontSize: 14, lineHeight: 1.2, letterSpacing: '-0.02em' }}>Loveblaq</div>
              <div style={{ color: '#3c6e71', fontSize: '0.52rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'Roboto Mono, monospace', fontWeight: 600 }}>Connect</div>
            </div>
          </div>
          <button
            onClick={toggle}
            style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: 6, borderRadius: 8 }}
          >
            {isDark ? <Sun size={17} color="var(--gold)" /> : <Moon size={17} color="var(--gold)" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.5)', zIndex: 70, backdropFilter: 'blur(4px)' }}
              />
              <motion.div
                initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
                transition={{ type: 'spring', stiffness: 380, damping: 42 }}
                style={{
                  position: 'fixed', top: 0, left: 0, bottom: 0, width: 272, zIndex: 80,
                  background: 'var(--sidebar-bg)', borderRight: '1px solid var(--sidebar-border)',
                  display: 'flex', flexDirection: 'column',
                  borderTopRightRadius: 18, borderBottomRightRadius: 18,
                  boxShadow: '4px 0 40px rgba(15,23,42,0.12)',
                }}
              >
                <div style={{
                  padding: '18px 16px', borderBottom: '1px solid var(--sidebar-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                    <Logo size={36} />
                    <div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, color: 'var(--text)', fontSize: 15, lineHeight: 1.2, letterSpacing: '-0.02em' }}>Loveblaq</div>
                      <div style={{ color: '#3c6e71', fontSize: '0.52rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'Roboto Mono, monospace', fontWeight: 600 }}>Connect</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', padding: 7 }}
                  >
                    <X size={14} />
                  </button>
                </div>
                <NavContent collapsed={false} onNavClick={() => setMobileOpen(false)} isDark={isDark} toggle={toggle} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <motion.aside
      animate={{ width: collapsed ? 62 : 240 }}
      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      style={{
        background: 'var(--sidebar-bg)',
        borderRight: '1px solid var(--sidebar-border)',
        height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 50,
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        boxShadow: '1px 0 0 var(--border)',
      }}
    >
      {/* Header */}
      <div style={{
        padding: '16px 12px', borderBottom: '1px solid var(--sidebar-border)',
        display: 'flex', alignItems: 'center', gap: 10, minHeight: 68, overflow: 'hidden',
      }}>
        <Logo size={36} />
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.16 }}
              style={{ overflow: 'hidden', minWidth: 0, flex: 1 }}
            >
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, color: 'var(--text)', fontSize: 15, lineHeight: 1.2, whiteSpace: 'nowrap', letterSpacing: '-0.02em' }}>Loveblaq</div>
              <div style={{ color: '#3c6e71', fontSize: '0.52rem', letterSpacing: '0.18em', textTransform: 'uppercase', whiteSpace: 'nowrap', fontFamily: 'Roboto Mono, monospace', fontWeight: 600 }}>Connect</div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            marginLeft: collapsed ? 0 : 'auto', background: 'none', border: 'none',
            color: 'var(--text-faint)', cursor: 'pointer', padding: 4, flexShrink: 0,
            borderRadius: 6, transition: 'color 0.15s', display: 'flex',
          }}
          title={collapsed ? 'Expand' : 'Collapse'}
        >
          <motion.div animate={{ rotate: collapsed ? 0 : 180 }} transition={{ duration: 0.2 }}>
            <Menu size={15} />
          </motion.div>
        </button>
      </div>

      <NavContent collapsed={collapsed} onNavClick={null} isDark={isDark} toggle={toggle} />
    </motion.aside>
  );
}
