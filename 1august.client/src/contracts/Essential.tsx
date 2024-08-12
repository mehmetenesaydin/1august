import React, { useState } from 'react';
import '../App.css'; // CSS dosyasını import et

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(JSON.stringify(formData));

        // API'ye POST isteği göndermek için örnek fetch isteği
        fetch('https://api.example.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us through the contact form below or via email.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Platform_Sahibi_Sirket_Adi: </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Vergi_Numarasi_A </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Company_B_Adress_ </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Vergi_Numarasi_B </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Country_A </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Country_B </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Platform_Yetkili_Adi </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Yurt_Disi_Is_Ortagi_Sirket_Adi </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Odeme_Sikligi </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Odeme_Sekli_ </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Bildirim_Suresi </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Bildirim_Sekli </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Fesih_Odeme_Suresi </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Mahkeme </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Platform_Yetkili_Adi_ </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">PL_Yetkili_Unvani_ </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">YD_Yetkili_Adi_ </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">PL_Yetkili_Unvani_ </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="name">Brief_Description_of_Collaboration </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

                <label htmlFor="message">Message: </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
