import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import DownloadContract from './pages/DownloadContract'; // Yeni sayfa importu
import jlogo from './assets/jlogo.png';

const App: React.FC = () => {
    return (
        <Router>
            <nav>
                <img src={jlogo} alt="Logo" style={{ height: '40px', marginRight: '1000px' }} />
                <ul>
                    <li><Link to="/">Anasayfa</Link></li>
                    <li><Link to="/about">Hakkımızda</Link></li>
                    <li><Link to="/services">Sözleşme Seçenekleri</Link></li>
                    <li><Link to="/contact">İletişim</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/download-contract">Download Contract</Link></li> {/* Yeni bağlantı */}
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/download-contract" element={<DownloadContract />} /> {/* Yeni route */}
            </Routes>
        </Router>
    );
};

export default App;