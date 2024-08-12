import React, { useState } from 'react';
import '../App.css';

const Services: React.FC = () => {
    const [buttonLabels] = useState([
        'Satış Sözleşmeleri', 'İş ve Çalışan Sözleşmeleri', 'Hizmet Sözleşmeleri',
        'Ticaret ve İş Ortaklığı Sözleşmeleri', 'Kredi ve Borç Sözleşmeleri', 'Konut ve Taşınmaz Sözleşmeleri',
        'Lisans ve Telif Hakları Sözleşmeleri', 'Tedarik ve Alım Sözleşmeleri', 'Sigorta Sözleşmeleri',
        'İşletme ve Yatırım Sözleşmeleri', 'Hizmet 11', 'Hizmet 12'
    ]);

    return (
        <div className="services-container">
            <h1>SÖZLEŞME SEÇENEKLERİ</h1>
            <p>Lütfen işlem yapmak istediğiniz sözleşmeyi seçiniz</p>
            
            <div className="button-container">
                {buttonLabels.map((label, index) => (
                    <button key={index} className="service-button">
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Services;
