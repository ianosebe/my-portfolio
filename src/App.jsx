// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import About from './pages/About'; // Add this line
import Skills from './pages/Skills';
import Certificates from './pages/Certificate';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
        <TopBar />
        <Navbar />

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
            <Route
              path="*"
              element={
                <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-indigo-400">404</p>
                    <h1 className="mt-4 text-4xl font-extrabold text-white">Page not found</h1>
                    <p className="mt-3 text-slate-400">The page you are looking for does not exist.</p>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;