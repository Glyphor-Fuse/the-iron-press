import { useEffect } from 'react';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import ExpressCTA from './components/ExpressCTA';
import GlyphorBadge from './utils/GlyphorBadge';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brass selection:text-obsidian">
      <Navbar />
      <Index />
      <ExpressCTA />
      <GlyphorBadge />
    </div>
  );
}

export default App;