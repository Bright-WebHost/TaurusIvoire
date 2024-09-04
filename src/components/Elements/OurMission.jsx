import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';

var img1 = require('./../../images/left-men.png');
var img2 = require('./../../images/background/bg-4.png');
var img3 = require('./../../images/background/bg-site.png');
var img4 = require('./../../images/All Teakwood/homeproduct.webp');

const OurMission = () => {
    const form = useRef();
    const { t } = useTranslation();
    const { leftside1, leftside2, rightside1, rightside2, phone, email, Adresse, btn, emailfill, names } = t("Contactpage", { returnObjects: true });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        fetch('https://sheet.best/api/sheets/50e39f95-55b1-402f-a57c-7d87cdc1a258', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => response.json())
            .then(data => {
                // alert('Message sent successfully to the server!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(error => {
                alert('Error sending message to the email');
                console.error('Error:', error);
            });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5qlx6mf', 'template_imznm4p', form.current, 'wb-7Vpbz_SDn2SZ53')
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Message sent successfully ');
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Error sending message via Email');
                }
            );
    };

    // Wrapper function to call both handleSubmit and sendEmail
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(e); // Submits the data to the server
        sendEmail(e);    // Sends the email via EmailJS
    };

    return (
        <TranslationWrapper>
            {({ mainheading, mainheadingsapn, productheading, productheadingsapn, subtext, li1, li2, li3, li4, btn, botttomtext, contactinfo1, contactinfo2, names, email, Phone, Textarea, contactinfobtn }) => (
                <>
                    <div className="section-full mobile-page-padding mission-outer-section p-t80 p-b30 bg-gray bg-no-repeat bg-right-center">
                        <div className="section-content">
                            <div className="container">
                                {/* TITLE START */}
                                <div className="section-head">
                                    <div className="mt-separator-outer separator-center">
                                        <div className="mt-separator">
                                            <h2 className="text-uppercase sep-line-one">
                                                <span className="font-weight-300 text-primary">{mainheading} </span> {mainheadingsapn}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                {/* TITLE END */}
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left">
                                            <h3 className="m-t0">
                                                <span className="font-weight-100">{productheading}</span>
                                                <br /> {productheadingsapn}
                                            </h3>
                                            <p>{subtext}</p>
                                            <ul className="list-angle-right anchor-line">
                                                <li><NavLink to={"/services"}>{li1}</NavLink></li>
                                                <li><NavLink to={"/services"}>{li2}</NavLink></li>
                                                <li><NavLink to={"/services"}>{li3}</NavLink></li>
                                                <li><NavLink to={"/services"}>{li4}</NavLink></li>
                                            </ul>
                                            <div className="text-right">
                                                <NavLink to="/services" className="site-button-link" data-hover="Read More">{btn} <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="mission-mid bg-no-repeat bg-cover m-b30" style={{ backgroundImage: 'url(' + img4 + ')' }} />
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="contact-home1-left bg-dark p-a30 m-b0">
                                            <h3 className="text-white m-t0">
                                                <span className="font-weight-100">{contactinfo1} </span> {contactinfo2}
                                            </h3>
                                            <form className="contact-form cons-contact-form" ref={form} onSubmit={handleFormSubmit}>
                                                <div className="form-group">
                                                    <input name="name" type="text" required className="form-control" placeholder={names} value={formData.name} onChange={handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <input name="email" type="email" required className="form-control" placeholder={emailfill} value={formData.email} onChange={handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" rows={4} className="form-control" required placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="site-button btn-effect">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                            <strong>{botttomtext}</strong>
                        </div>
                    </div>
                </>
            )}
        </TranslationWrapper>
    );
};

const TranslationWrapper = ({ children }) => {
    const { t } = useTranslation();
    const { mainheading, mainheadingsapn, productheading, productheadingsapn, subtext, li1, li2, li3, li4, btn, botttomtext, contactinfo1, contactinfo2, names, email, Phone, Textarea, contactinfobtn } = t("ourproduct", { returnObjects: true });
    return children({ mainheading, mainheadingsapn, productheading, productheadingsapn, subtext, li1, li2, li3, li4, btn, botttomtext, contactinfo1, contactinfo2, names, email, Phone, Textarea, contactinfobtn });
};

export default OurMission;
