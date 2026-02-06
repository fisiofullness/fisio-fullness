import Topbar from './components/Topbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Topbar />
      <Header />
      <Hero />
      <Features />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
