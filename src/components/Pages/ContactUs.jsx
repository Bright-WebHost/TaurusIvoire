import React, { useRef, useState } from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import GoogleMapReact from 'google-map-react';
import ContactBanner from '../Elements/ContactBanner';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {
    const form = useRef();
    const { t } = useTranslation();
    const { leftside1, leftside2, rightside1, rightside2, phone, email, Adresse, btn, emailfill, names,main1,main2,main3 } = t("Contactpage", { returnObjects: true });

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
            body: JSON.stringify({  name, email, message  })
        })
        .then(response => response.json())
        .then(data => {
            // alert('Message sent successfully ');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch(error => {
            alert('Error sending message to email');
            console.error('Error:', error);
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5qlx6mf', 'template_imznm4p', form.current, 'wb-7Vpbz_SDn2SZ53')
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Message sent successfully');
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

    const defaultProps = {
        center: {
            lat: 34.073280,
            lng: -118.251410
        },
        zoom: 12
    };

    return (
        <>
            <Header />
            <div className="page-content">
                <ContactBanner />

                {/* SECTION CONTENT START */}
                <div className="section-full p-tb80 inner-page-padding">
                    {/* LOCATION BLOCK */}
                    <div className="container">
                        {/* GOOGLE MAP & CONTACT FORM */}
                        <div className="section-content">
                            {/* CONTACT FORM */}
                            <div className="row">
                                <div className="col-md-8 col-sm-6">
                                    <form className="contact-form cons-contact-form" ref={form} onSubmit={handleFormSubmit}>
                                        <div className="contact-one m-b30">
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <h4> {main1}</h4>
                                                    <div className="mt-separator">
                                                        <h2 className="text-uppercase sep-line-one">
                                                            <span className="font-weight-300 text-primary"> {main2}</span> {main3}
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input name="name" type="text" required className="form-control" placeholder={names} value={formData.name} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input name="email" type="email" required className="form-control" placeholder={emailfill} value={formData.email} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" rows={4} className="form-control" required placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                                            </div>
                                            <div className="text-right">
                                                <input type="submit" value='Submit' className="site-button btn-effect" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="contact-info m-b30">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-uppercase sep-line-one"><span className="font-weight-300 text-primary">{rightside1}</span> {rightside2}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <div className="bg-dark p-a20 text-white">
                                            <div className="mt-icon-box-wraper left p-b40">
                                                <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0 font-weight-500">{phone}</h5>
                                                    <p><a href='tel:+225 27 23 407 006' style={{ color: 'white' }}>+225 27 23 407 006</a></p>
                                                </div>
                                            </div>
                                            <div className="mt-icon-box-wraper left p-b40">
                                                <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0 font-weight-500">{email}</h5>
                                                    <p><a href='mailto:Sales@TaurusIvoire.com' style={{ color: 'white' }}>Sales@TaurusIvoire.com</a></p>
                                                </div>
                                            </div>
                                            <div className="mt-icon-box-wraper left">
                                                <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0 font-weight-500">{Adresse}</h5>
                                                    <p>Abidjan, Cóte d’Ivoire</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Uncomment and configure Google Maps API to use the map */}
                        {/* <div className="gmap-outline">
                            <div style={{ height: '400px', width: '100%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
                                    defaultCenter={defaultProps.center}
                                    defaultZoom={defaultProps.zoom}
                                >
                                    <AnyReactComponent
                                    lat={34.073280}
                                    lng={-118.251410}
                                    text={<i className="fa fa-map-marker" />}
                                    />
                                </GoogleMapReact>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* SECTION CONTENT END */}
            </div>

            <Footer />
        </>
    );
};

export default ContactUs;
