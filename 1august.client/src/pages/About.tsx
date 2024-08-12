import React from 'react';
import '../App.css'; // CSS dosyasını import et

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h1>HAKKIMIZDA</h1>
            <p>
                JL Management and Industrial Systems Ltd,
                öncelikli hedefi her tür ve büyüklükteki işletmenin modern dijital ortamda büyümesine ve gelişmesine
                yardımcı olmak olan, teknoloji odaklı küresel bir iş zekası şirketidir. İşletmelerin süreçlerini dönüştürmelerine,
                verimliliklerini ve üretkenliklerini artırmalarına ve tam potansiyellerine ulaşmalarına olanak tanıyan birinci sınıf,
                ileri teknoloji çözümleri ve hizmetleri sunuyoruz. Deneyimli ve yüksek vasıflı profesyonellerden oluşan ekibimiz
                , hizmet verdiğimiz her müşterinin benzersiz ihtiyaçlarına ve hedeflerine göre uyarlanmış yenilikçi ve özelleştirilmiş
                çözümler sunma konusunda uzmanlaşmıştır. Operasyonlarınızı optimize etmek, veri analizlerinizi ve raporlamanızı
                geliştirmek veya iş akışınızı kolaylaştırmak istiyorsanız, başarılı olmanıza yardımcı olacak uzmanlığa ve kaynaklara sahibiz.
                JL Management and Industrial Systems Ltd olarak taahhüdümüz mükemmelliğe yöneliktir ve dijital dönüşüm hedeflerine ulaşmalarına
                yardımcı olmak için dünya çapındaki işletmelerle ortaklık yapmaktan gurur duyuyoruz.
            </p>
        </div>
    );
};

export default About;
