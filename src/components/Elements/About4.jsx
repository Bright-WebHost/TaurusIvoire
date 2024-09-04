import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useTranslation } from 'react-i18next';

const images = [
    require('./../../images/All Taurus Ivoire/about11.webp'),
    require('./../../images/All Taurus Ivoire/about12.webp'),
    require('./../../images/All Teakwood/Aboutbanner3.webp'),
    // require('./../../images/gallery/portrait/pic7.jpg'),
    // require('./../../images/gallery/portrait/pic1.jpg'),
]

var bnr1 = require('./../../images/background/line.png');

class About4 extends React.Component {
    
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/masonary.js');
      
    };
    
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: true
        };
        return (
            
<TranslationWrapper>
{({bannerhead,producttext,p1,p2,p3,btn,producttext1}) => (
            <>
                <div className="section-full p-t80 p-b80 bg-white inner-page-padding">
                    <div className="container">
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="ow-img">
                                                    <NavLink to="/about"><img src={item} alt=""/></NavLink>
                                                    </div>
                                                </div>
                                            ))}
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="m-about-containt text-black p-t80">
                                        <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                                            {/* <span className="text-primary large-title">25</span> */}
                                            <span className="large-title-info " style={{fontSize:'30px'}}>{producttext}<span style={{color:"#C91F1A"}}> {producttext1}</span></span>
                                        </div><br/><br/><br/>
                                        {/* <h3 className="font-weight-600">Improving quality of life with an integrated unified approach.</h3> */}
                                        <p>{p1}</p>
                                        <p>{p2}</p>
                                        <p>{p3}</p>
                                        <div className="author-info p-t20">
                                            {/* <div className="author-signature">
                                                <img src={require('./../../images/Signature+Black.png')} alt="Signature" width={150} />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="m-t0">David Houkr</h4>
                                                <p>Architect &amp; Founder</p>
                                            </div> */}
                                            <NavLink to="/contactus" className="site-button btn-effect m-b15"><span>{btn}</span></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
                )}
            </TranslationWrapper>
        );
    }
};
const TranslationWrapper = ({ children }) => {
 const {t}=useTranslation()
    const { bannerhead,producttext,p1,p2,p3,btn,producttext1 } = t("AbouPage", { returnObjects: true });
    return children({bannerhead,producttext,p1,p2,p3,btn,producttext1});
};
export default About4;