import React, { useState } from 'react';
import { getContractPdf } from '../Api.ts'; // API çaðrýsý için oluþturduðunuz fonksiyon

const DownloadContract: React.FC = () => {
    const [contractPdf, setContractPdf] = useState<string | null>(null);

    const fetchContract = async () => {
        const contractData = {
            Effective_Date: new Date(),
            Platform_Sahibi_Sirket_Adi: "Platform Sahibi",
            Vergi_Numarasi_A: "123456",
            Yurt_Disi_Is_Ortagi_Sirket_Adi: "Yurt Dýþý Ortak",
            Company_A_Address_: "Adres A",
            Country_A: "Ülke A",
            Country_B: "Ülke B",
            Company_B_Adress_: "Adres B",
            Vergi_Numarasi_B: "654321",
            Odeme_Sikligi: "Aylýk",
            Bildirim_Suresi: "30 gün",
            Bildirim_Sekli: "Yazýlý",
            Fesih_Odeme_Suresi: "60 gün",
            Odeme_Sekli_: "Banka Transferi",
            Mahkeme: "Mahkeme",
            Platform_Yetkili_Adi: "Yetkili Adý",
            PL_Yetkili_Unvani_: "Ünvan",
            YD_Yetkili_Adi: "YD Yetkili Adý",
            YD_Yetkili_Unvani: "YD Ünvan",
            Brief_Description_of_Collaboration: "Ýþbirliði Açýklamasý"
        };

        try {
            const pdfData = await getContractPdf(contractData);
            setContractPdf(URL.createObjectURL(new Blob([pdfData], { type: 'application/pdf' })));
        } catch (error) {
            console.error("Error fetching contract PDF", error);
        }
    };

    return (
        <div>
            <h1>Contract PDF</h1>
            <button onClick={fetchContract}>Get Contract PDF</button>
            {contractPdf && (
                <div>
                    <h2>Download the contract:</h2>
                    <a href={contractPdf} download="Online_Platform_Hizmet_Sozlesmesi.pdf">Download PDF</a>
                </div>
            )}
        </div>
    );
};

export default DownloadContract;
