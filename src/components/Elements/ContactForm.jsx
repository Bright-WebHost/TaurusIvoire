// ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        country: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://script.google.com/macros/s/AKfycbwWDKBVTffVpJfNuadefcSD8_7IAGKhc6ryuFNMcmPOwvoYAJA09sP1_DYw93aIoSv_Hw/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData).toString()
        })
        .then(response => response.json())
        .then(data => {
            alert('Form submitted successfully');
            window.location.reload();
        })
        .catch(error => {
            alert('Something went wrong');
        });
    };

    return (
        <div className="container">
            <div style={{ textAlign: 'center' }}>
                <h2>Contact Us</h2>
                <p>Swing by for a cup of coffee, or leave us a message:</p>
            </div>
            <div className="row">
                <div className="column">
                    <form id="submit-form" onSubmit={handleSubmit}>
                        <label htmlFor="fname">First Name</label>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            placeholder="Your name.."
                        />
                        <label htmlFor="lname">Email</label>
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                            placeholder="Your email.."
                        />
                        <label htmlFor="country">Country</label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write something.."
                            style={{ height: '170px' }}
                        ></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="column">
                    <img src="crossroads.png" alt="Crossroads" style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
