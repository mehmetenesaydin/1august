﻿import React from 'react';
import '../cssfiles/FAQ.css'; // CSS dosyasını import et

const FAQ: React.FC = () => {
    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-item">
                <h2>Question 1: What is your return policy?</h2>
                <p>Answer: Our return policy allows returns within 30 days of purchase with a receipt.</p>
            </div>
            <div className="faq-item">
                <h2>Question 2: Do you offer international shipping?</h2>
                <p>Answer: Yes, we offer international shipping to many countries. Please check our shipping policy for more details.</p>
            </div>
            {/* Add more FAQs as needed */}
        </div>
    );
};

export default FAQ;
