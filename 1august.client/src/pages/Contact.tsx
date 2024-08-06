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
                <label htmlFor="name">Name: </label>
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
