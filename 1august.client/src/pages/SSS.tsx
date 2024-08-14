import React from 'react';
import '../App.css'; // CSS dosyasını import et

const SSS: React.FC = () => {
    return (
        <div className="sss-container">
            <h1>Sıklıkla Sorulan Sorular</h1>
            <div className="sss-item">
                <h2>Soru 1: İade politikanız nedir?</h2>
                <p>Cevap: İade politikamız, bir makbuz ile satın alındıktan sonraki 30 gün içinde iadeye izin verir.</p>
            </div>
            <div className="sss-item">
                <h2>Soru 2: Uluslararası nakliye hizmeti sunuyor musunuz?</h2>
                <p>Cevap: Evet, birçok ülkeye uluslararası nakliye sunuyoruz. Daha fazla ayrıntı için lütfen nakliye politikamızı kontrol edin.</p>
            </div>
            {/* Add more FAQs as needed */}
        </div>
    );
};

export default SSS;
