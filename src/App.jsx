import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filosofia from './components/Filosofia';
import VisualDivider from './components/VisualDivider';
import Protocollo from './components/Protocollo';
import Prodotti from './components/Prodotti';
import Bomboniere from './components/Bomboniere';
import Contatti from './components/Contatti';
import Footer from './components/Footer';
import AgeGate from './components/AgeGate';

function App() {
  return (
    <main className="w-full min-h-screen bg-cream selection:bg-clay selection:text-cream">
      <AgeGate />
      <Navbar />
      <Hero />
      <Filosofia />
      <VisualDivider />
      <Protocollo />
      <Prodotti />
      <Bomboniere />
      <Contatti />
      <Footer />
    </main>
  );
}

export default App;
