import React from 'react';
import '../App.css'; // CSS dosyasını import et

const Services: React.FC = () => {
    return (
        <div className="services-container">
            <h1>SÖZLEŞME SEÇENEKLERİ</h1>
            <p>Lütfen işlem yapmak istediğiniz sözleşmeyi seçin</p>
            <div className="button-container">
                {Array.from({ length: 12 }, (_, index) => (
                    <button key={index} className="service-button">
                        Button {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Services;
