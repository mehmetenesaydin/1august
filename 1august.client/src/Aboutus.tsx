import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="top-section">
                <button className="button">Giriş Yap</button>
                <button className="button2">Kaydol</button>
            </div>
            <div className="bottom-section">
                <div className="button-row">
                    <button className="button">Anasayfa</button>
                    <button className="button">Sözleşme Seçenekleri</button>
                    <button className="button">Danışmanlık & Destek</button>
                    <button className="button">Hakkımızda</button>
                    <button className="button">İletişim</button>
                </div>
            </div>
        </div>
    );
}

export default App;
