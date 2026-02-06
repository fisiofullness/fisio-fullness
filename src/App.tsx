import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PacientesPage from './pages/PacientesPage';
import ProfesionalesPage from './pages/ProfesionalesPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pacientes" element={<PacientesPage />} />
        <Route path="/profesionales" element={<ProfesionalesPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
