import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useMediaQuery } from './hooks/useMediaQuery';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Figures from './pages/Figures';
import Inventors from './pages/Inventors';
import FigureDetail from './pages/FigureDetail';
import MapPage from './pages/MapPage';
import Quiz from './pages/Quiz';
import Learning from './pages/Learning';
import Stories from './pages/Stories';
import Progress from './pages/Progress';
import Origins from './pages/Origins';
import BlackCentralEurope from './pages/BlackCentralEurope';
import ColorSamples from './pages/ColorSamples';
import AIStudio from './pages/AIStudio';
import DrownedTowns from './pages/DrownedTowns';
import DevilsPunchbowl from './pages/DevilsPunchbowl';
import Rosewood from './pages/Rosewood';
import BlackWallStreet from './pages/BlackWallStreet';
import ElaineMassacre from './pages/ElaineMassacre';
import WilmingtonCoup from './pages/WilmingtonCoup';
import ColfaxMassacre from './pages/ColfaxMassacre';
import EastStLouis from './pages/EastStLouis';
import OcoeeMassacre from './pages/OcoeeMassacre';
import AtlantaMassacre from './pages/AtlantaMassacre';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif', color: 'var(--gold)' }}>✦</div>
      <h1 style={{ fontSize: '2.5rem', color: 'var(--text)', marginBottom: '0.5rem' }}>Page Not Found</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '360px', lineHeight: 1.7 }}>
        This page doesn't exist in our archive. Explore our collection of historical figures instead.
      </p>
      <div style={{ display: 'flex', gap: 12 }}>
        <button className="btn-gold" onClick={() => navigate('/')}>Go Home</button>
        <button className="btn-outline" onClick={() => navigate('/figures')}>Browse Figures</button>
      </div>
    </div>
  );
}

function AppShell() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)', transition: 'background var(--transition)' }}>
      {/* Ertiox signature grain — fixed over everything */}
      <div className="grain-fixed" />
      <Sidebar />
      <main style={{
        flex: 1,
        marginLeft: isMobile ? 0 : 240,
        paddingTop: isMobile ? 56 : 0,
        minHeight: '100vh',
        overflowX: 'hidden',
        transition: 'margin-left 0.22s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/figures"    element={<Figures />} />
          <Route path="/figure/:id" element={<FigureDetail />} />
          <Route path="/inventors"  element={<Inventors />} />
          <Route path="/map"        element={<MapPage />} />
          <Route path="/quiz"       element={<Quiz />} />
          <Route path="/learning"   element={<Learning />} />
          <Route path="/stories"    element={<Stories />} />
          <Route path="/progress"   element={<Progress />} />
          <Route path="/origins"    element={<Origins />} />
          <Route path="/black-central-europe" element={<BlackCentralEurope />} />
          <Route path="/colors"      element={<ColorSamples />} />
          <Route path="/ai-studio"     element={<AIStudio />} />
          <Route path="/drowned-towns"    element={<DrownedTowns />} />
          <Route path="/devils-punchbowl" element={<DevilsPunchbowl />} />
          <Route path="/rosewood"          element={<Rosewood />} />
          <Route path="/black-wall-street" element={<BlackWallStreet />} />
          <Route path="/elaine-massacre"   element={<ElaineMassacre />} />
          <Route path="/wilmington-coup"   element={<WilmingtonCoup />} />
          <Route path="/colfax-massacre"   element={<ColfaxMassacre />} />
          <Route path="/east-st-louis"     element={<EastStLouis />} />
          <Route path="/ocoee-massacre"    element={<OcoeeMassacre />} />
          <Route path="/atlanta-massacre"  element={<AtlantaMassacre />} />
          <Route path="*"           element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  );
}
