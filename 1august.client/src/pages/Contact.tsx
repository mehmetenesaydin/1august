import React from 'react';

const Contact: React.FC = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us through the contact form blelow or via email.</p>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" />
                <label htmlFor="message">Message: </label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
     