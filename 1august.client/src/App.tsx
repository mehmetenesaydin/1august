import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
    const navigate = useNavigate(); // useNavigate kancasını kullanarak yönlendirme fonksiyonunu alın.

    const handleDownload = async () => {
        try {
            const response = await axios({
                url: 'https://localhost:7132/69c7684e-8e58-4dbd-826f-a6745751aa4e', // Backend endpoint'i
                method: 'GET',
                responseType: 'blob' // Dosya döndürüleceği için
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.txt'); // İndirilen dosyanın ismi
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Download error:', error);
        }
    };

    return (
        <div className="App">
            <div className="top-section">
                <button className="button" onClick={() => navigate('/login')}>Giriş Yap</button>
                <button className="button2" onClick={() => navigate('/signup')}>Kaydol</button>
            </div>
            <div className="bottom-section">
                <div className="button-row">
                    <button className="button" onClick={() => navigate('/')}>Anasayfa</button>
                    <button className="button" onClick={() => navigate('/typesofcontract')}>Sözleşme Seçenekleri</button>
                    <button className="button" onClick={() => navigate('/support')}>Danışmanlık & Destek</button>
                    <button className="button" onClick={() => navigate('/about')}>Hakkımızda</button>
                    <button className="button" onClick={() => navigate('/contactus')}>İletişim</button>
                    <button className="button" onClick={handleDownload}>İndir</button> {/* İndir butonu buraya eklendi */}
                </div>
                <div className="container">
                    <div className="box">
                        <div className="title">Sözleşme Otomasyonu Nedir?</div>
                        <div className="text">Sözleşme otomasyonu, sözleşmelerin oluşturulmasını, yönetilmesini ve izlenmesini otomatikleştiren bir süreçtir. Bu, zaman kazandırır ve hataları azaltır.</div>
                    </div>
                    <div className="box">
                        <div className="title">Avantajları Nelerdir?</div>
                        <div className="text">Sözleşme otomasyonunun avantajları arasında daha hızlı işlem süreleri, daha az manuel işlem ve daha iyi veri yönetimi bulunur.</div>
                    </div>
                    <div className="box">
                        <div className="title">Nasıl Kullanılır?</div>
                        <div className="text">Sözleşme otomasyonu genellikle özel yazılımlar veya uygulamalar aracılığıyla gerçekleştirilir. Kullanıcılar bu yazılımları sözleşme süreçlerini yönetmek için kullanır.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
