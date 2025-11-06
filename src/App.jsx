import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPost_AIGuiltSyndrome from './components/BlogPost_AIGuiltSyndrome';
import './App.css';
import './components/BlogPost.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <HelmetProvider>
      <Router>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        
        <main>
          <Sidebar />
          
          <div className="main-content">
            <Navbar />
            
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/ai-guilt-syndrome" element={<BlogPost_AIGuiltSyndrome />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </Router>
    </HelmetProvider>
  );
}

export default App;
