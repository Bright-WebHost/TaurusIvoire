import React from 'react';
import { useTranslation } from 'react-i18next';

var img1 = require('./../../images/background/bg-6.png');
var img2 = require('./../../images/background/line.png');

class AboutSummary extends React.Component {
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
        return (
            
<TranslationWrapper>
{({ producthead1,producthead2,heading1,sub1,heading2,sub2,heading3,sub3,heading4,sub4}) => (
            <>
                <div className="section-full p-t80 p-b80 bg-dark bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator text-white">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">{producthead1} </span> {producthead2}</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content our-story">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/All Teakwood/Services 1.webp')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2011-12</h4> */}
                                        <h4 className="m-b20">{heading1} </h4>
                                        <p>{sub1}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/All Teakwood/Services 2.webp')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2013-14</h4> */}
                                        <h4 className="m-b20">{heading2}</h4>
                                        <p>{sub2}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/All Teakwood/Services 3.webp')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2015-16</h4> */}
                                        <h4 className="m-b20">{heading3}</h4>
                                        <p>{sub3}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/All Teakwood/Services 4.webp')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2017-18</h4> */}
                                        <h4 className="m-b20">{heading4}</h4>
                                        <p>{sub4}</p>
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
 const {t}=  useTranslation()
    const {  producthead1,producthead2,heading1,sub1,heading2,sub2,heading3,sub3,heading4,sub4} = t("Servicepage", { returnObjects: true });
    return children({ producthead1,producthead2,heading1,sub1,heading2,sub2,heading3,sub3,heading4,sub4});
};
export default AboutSummary;