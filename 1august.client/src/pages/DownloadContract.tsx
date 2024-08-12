import React, { useState } from 'react';
import { getContractPdf } from '../Api.ts'; // API çağrısı için oluşturduğunuz fonksiyon

const DownloadContract: React.FC = () => {
    const [formData, setFormData] = useState({
        Effective_Date: '',
        Platform_Sahibi_Sirket_Adi: '',
        Vergi_Numarasi_A: '',
        Yurt_Disi_Is_Ortagi_Sirket_Adi: '',
        Company_A_Address_: '',
        Company_B_Adress_: '',
        Vergi_Numarasi_B: '',
        Country_A: '',
        Country_B: '',
        Odeme_Sikligi: '',
        Odeme_Sekli_: '',
        Bildirim_Suresi: '',
        Bildirim_Sekli: '',
        Fesih_Odeme_Suresi: '',
        Mahkeme: '',
        Platform_Yetkili_Adi: '',
        PL_Yetkili_Unvani_: '',
        YD_Yetkili_Adi: '',
        YD_Yetkili_Unvani: '',
        Brief_Description_of_Collaboration: ''
    });
    const [contractPdf, setContractPdf] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const pdfData = await getContractPdf(formData);
            setContractPdf(URL.createObjectURL(new Blob([pdfData], { type: 'application/pdf' })));
        } catch (error) {
            console.error("Error fetching contract PDF", error);
        }
    };

    return (
        <div>
            <h1>Contract PDF</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Effective Date:
                        <input
                            type="date"
                            name="Effective_Date"
                            value={formData.Effective_Date}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Platform Sahibi Şirket Adı:
                        <input
                            type="text"
                            name="Platform_Sahibi_Sirket_Adi"
                            value={formData.Platform_Sahibi_Sirket_Adi}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Vergi Numarası A:
                        <input
                            type="text"
                            name="Vergi_Numarasi_A"
                            value={formData.Vergi_Numarasi_A}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Yurt Dışı İş Ortağı Şirket Adı:
                        <input
                            type="text"
                            name="Yurt_Disi_Is_Ortagi_Sirket_Adi"
                            value={formData.Yurt_Disi_Is_Ortagi_Sirket_Adi}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Company A Address:
                        <input
                            type="text"
                            name="Company_A_Address_"
                            value={formData.Company_A_Address_}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Company B Address:
                        <input
                            type="text"
                            name="Company_B_Adress_"
                            value={formData.Company_B_Adress_}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Vergi Numarası B:
                        <input
                            type="text"
                            name="Vergi_Numarasi_B"
                            value={formData.Vergi_Numarasi_B}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Country A:
                        <input
                            type="text"
                            name="Country_A"
                            value={formData.Country_A}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Country B:
                        <input
                            type="text"
                            name="Country_B"
                            value={formData.Country_B}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Ödeme Sıklığı:
                        <input
                            type="text"
                            name="Odeme_Sikligi"
                            value={formData.Odeme_Sikligi}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Ödeme Şekli:
                        <input
                            type="text"
                            name="Odeme_Sekli_"
                            value={formData.Odeme_Sekli_}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Bildirim Süresi:
                        <input
                            type="text"
                            name="Bildirim_Suresi"
                            value={formData.Bildirim_Suresi}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Bildirim Şekli:
                        <input
                            type="text"
                            name="Bildirim_Sekli"
                            value={formData.Bildirim_Sekli}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Fesih Ödeme Süresi:
                        <input
                            type="text"
                            name="Fesih_Odeme_Suresi"
                            value={formData.Fesih_Odeme_Suresi}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Mahkeme:
                        <input
                            type="text"
                            name="Mahkeme"
                            value={formData.Mahkeme}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Platform Yetkili Adı:
                        <input
                            type="text"
                            name="Platform_Yetkili_Adi"
                            value={formData.Platform_Yetkili_Adi}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Platform Yetkili Ünvanı:
                        <input
                            type="text"
                            name="PL_Yetkili_Unvani_"
                            value={formData.PL_Yetkili_Unvani_}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        YD Yetkili Adı:
                        <input
                            type="text"
                            name="YD_Yetkili_Adi"
                            value={formData.YD_Yetkili_Adi}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        YD Yetkili Ünvanı:
                        <input
                            type="text"
                            name="YD_Yetkili_Unvani"
                            value={formData.YD_Yetkili_Unvani}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Brief Description of Collaboration:
                        <input
                            type="text"
                            name="Brief_Description_of_Collaboration"
                            value={formData.Brief_Description_of_Collaboration}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Get Contract PDF</button>
            </form>
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
