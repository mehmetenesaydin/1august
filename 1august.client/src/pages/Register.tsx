import React, { useState } from 'react';
import axios from 'axios'; // axios'u dahil edin
import '../cssfiles/Register.css'; // CSS dosyasını dahil edin

// API URL'inizi burada tanımlayın
const API_URL = 'https://localhost:44335/api'; // API'nin temel URL'i

const Signup: React.FC = () => {
    const [formData, setFormData] = useState({
        Username: '',
        Email: '',
        Password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.Password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            // API URL'yi buraya ekleyin
            const response = await axios.post(`${API_URL}/auth/register`, {
                Username: formData.Username,
                Email: formData.Email,
                Password: formData.Password
            });

            if (response.status === 200) {
                console.log('Registration successful:', response.data);
                alert('Registration successful!');
            }
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="Username"
                        value={formData.Username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="Password"
                        value={formData.Password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
