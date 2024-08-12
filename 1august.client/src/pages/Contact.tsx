import React, { useState } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    jobTitle: string;
    company: string;
    department: string;
    manager: string;
    startDate: string;
    endDate: string;
}

const FormComponent: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        jobTitle: '',
        company: '',
        department: '',
        manager: '',
        startDate: '',
        endDate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/create-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'generated.pdf';
                link.click();
            } else {
                console.error('Failed to create PDF');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Phone Number:
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    State:
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    ZIP Code:
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Country:
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Job Title:
                    <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Company:
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Department:
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Manager:
                    <input
                        type="text"
                        name="manager"
                        value={formData.manager}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Start Date:
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    End Date:
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Create PDF</button>
        </form>
    );
};

export default FormComponent;
