import React, { useState } from 'react';
import axios from 'axios'; // axios'u dahil edin
import '../cssfiles/Login.css'; // CSS dosyasını dahil edin

// API URL'inizi burada tanımlayın
const API_URL = 'https://localhost:44335/api'; // API'nin temel URL'i

const Login: React.FC = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                Username: Username,
                Password: Password
            });

            if (response.status === 200) {
                console.log('Login successful:', response.data);
                alert('Login successful!');
                // Burada token'ı saklayabilir ve kullanıcıyı yönlendirebilirsiniz
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={Username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={Password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
