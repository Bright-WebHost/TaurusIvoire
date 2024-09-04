import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider from './../Elements/Slider';
import Specialization from './../Elements/Specialization';
import About from './../Elements/About';
import OurValue from './../Elements/OurValue';
import OurMission from './../Elements/OurMission';
import OurServices from './../Elements/OurServices';
import Callus from './../Elements/Callus';
import OurProject from './../Elements/OurProject';
import Blogs from './../Elements/Blogs';
import Testimonials from './../Elements/Testimonials';
import OurValue2 from '../Elements/OurValue2';
import Slider3 from '../Elements/Slider3';
import Lantest from './Lantest';
import LanguageSelector from '../language-selector';

class Home extends React.Component {
    render() {
        return (
            <>
            {/* <Lantest/> */}
            {/* <LanguageSelector/> */}
                <Header />
                <div className="page-content">
                    <Slider3 />
                    <OurValue2/>
                    {/* <Specialization /> */}
                    {/* <About /> */}
                    {/* <OurValue /> */}
                    <OurMission />
                    {/* <OurServices /> */}
                    {/* <Callus /> */}
                    {/* <OurProject /> */}
                    {/* <Blogs /> */}
                    {/* <Testimonials /> */}
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;