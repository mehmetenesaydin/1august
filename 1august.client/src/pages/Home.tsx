
import React from 'react';
import '../cssfiles/Home.css' // CSS dosyasını import et

const Home: React.FC = () => {
   
    return (
        <div className="home-container">
            <h1>Sözleşme Otomasyonuna Hoşgeldiniz</h1>
            
            <div className="button-container">
                <div className="button-item">
                    <button className="home-button">Sözleşme Otomasyonu Nedir?</button>
                    <div className="text-box">Sözleşme otomasyonu, sözleşme yönetimi süreçlerini daha verimli,
                        hatasız ve hızlı hale getirmek amacıyla kullanılan yazılım ve teknolojilerin genel adıdır.
                        Bu süreç, sözleşme oluşturma, düzenleme, izleme ve saklama işlemlerini otomatikleştirir.</div>
                </div>
                <div className="button-item">
                    <button className="home-button">Sözleşme Otomasyonunun Kazandırdıkları Nelerdir?</button>
                    <div className="text-box">Zaman ve İş Gücü Tasarrufu
                        Hata Azaltma
                        Daha İyi Yasal Uyum
                        İyileştirilmiş İzlenebilirlik ve Yönetim
                        Verimlilik ve Üretkenlik Artışı
                        Maliyet Tasarrufu
                        Gelişmiş İşbirliği
                        Daha İyi Analiz ve Raporlama

               </div>
                </div>
                <div className="button-item">
                    <button className="home-button">Sözleşme Otomasyonu Nasıl Kullanılır?</button>
                    <div className="text-box">Sistem Kurulumu ve Yapılandırma
                        Şablonların Oluşturulması
                        Sözleşme Oluşturma ve Düzenleme
                        İmza ve Onay Süreçleri
                        Depolama ve Yönetim
                        İzleme ve Hatırlatmalar
                        Raporlama ve Analiz
                        Geri Bildirim ve İyileştirme</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
