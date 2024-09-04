import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/3.jpg');

const projects = [
    {
        image: require('./../../images/projects/square/pic4.jpg'),
        title: 'Delivering architecture, planning, and design',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    },
    {
        image: require('./../../images/projects/square/pic7.jpg'),
        title: 'Capitalizing on the unique qualities of each place',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/square/pic5.jpg'),
        title: 'Delivering architecture, planning, and design',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    },
    {
        image: require('./../../images/projects/square/pic6.jpg'),
        title: 'Improving quality of life with an integrated unified approach',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    },
    {
        image: require('./../../images/projects/square/pic3.jpg'),
        title: 'Unique solutions for your home through a personalized process',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    }
]

class ProjectCarousel extends React.Component {
    render() {
        
        const options = {
            loop:true,
            autoplay:false,
            center: false,
            items:3,
            margin:40,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },			
                991:{
                    items:3
                },
                1200:{
                    items:4
                }			
                
            }
        };

        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="Broad vision. Careful thought. Hand-crafted design." pagename="Project carousel" bgimage={bnrimg}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 bg-gray inner-page-padding">
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="work-carousel-outer">
                                    <OwlCarousel className="owl-carousel work-carousel owl-btn-vertical-center" {...options}>
                                    
                                        {projects.map((item, index) => (
                                            <div key={index} className="item mt-box">
                                                <div className="mt-img-effect mt-img-overlay7">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className="mt-info p-a30">
                                                    <h4 className="m-b20 m-t0"><NavLink to={"/project-detail"}>{item.title}</NavLink></h4>
                                                    <p>{item.description}</p>
                                                    <NavLink to={"/project-detail"} className="site-button btn-effect">Read More</NavLink>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ProjectCarousel;