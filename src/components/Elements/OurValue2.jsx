import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';


var img1 = require('./../../images/All Teakwood/homeabout.webp');


class OurValue2 extends React.Component {
    
    render() {
        return (
            <TranslationWrapper>
            {({ mainpagehead, mainpageheadsapn, mainpageabout,mainpageli1,mainpageli2,mainpageli3,mainpagebtn}) => (
                
            
            <>
                <div className="section-full p-t80 p-b50 bg-white mobile-page-padding">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-7 col-sm-6">
                                    <div className="video-section-full-v2">
                                        <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                                            <div className="overlay-main bg-black opacity-04" />
                                                <div className="video-section-inner">
                                                    {/* <div className="video-section-content">
                                                        <div className="video-section-left">
                                                        <button type="button" className="play-now" data-toggle="modal" data-target="#myModal">Open Modal
                                                                <i className="icon fa fa-play" />
                                                                <span className="ripple" />
                                                                </button>
                                                        </div>
                                                        <div className="video-section-right">
                                                            <NavLink to={"#"} className="font-weight-600 text-uppercase" onClick={this.openModal}>Video Presentation</NavLink>
                                                        </div>
                                                    </div> */}
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-6">
                                    {/* TITLE START */}
                                    <div className="video-part-2">
                                        <h3><span className="font-weight-100">{mainpagehead} </span> {mainpageheadsapn}</h3>
                                        <p>{mainpageabout}</p>
                                        <ul className="list-angle-right anchor-line">
                                        <li><NavLink to={"#"}>{mainpageli1}</NavLink></li>
                                            <li><NavLink to={"#"}>{mainpageli2}</NavLink></li>
                                            <li><NavLink to={"#"}>{mainpageli3}</NavLink></li>
                                        </ul>
                                    </div>
                                    {/* TITLE END */}
                                    {/* <div className="author-info author-info-v2 p-t20">
                                        <div className="author-signature">
                                            <img src={require('./../../images/Signature+Black.png')} alt="Signature" width={150} />
                                        </div>
                                        <div className="author-name">
                                            <h4 className="m-t0">David Houkr</h4>
                                            <p>Architect &amp; Founder</p>
                                        </div>
                                    </div> */}
                                    <div className="text-center p-t10">
                                    <NavLink to={"/about"}>  <button type="submit" className="site-button btn-effect ">
                                    {mainpagebtn}
                    </button></NavLink>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://vimeo.com/34741214' />
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
const {t}=   useTranslation()
    const { mainpagehead, mainpageheadsapn, mainpageabout,mainpageli1,mainpageli2,mainpageli3,mainpagebtn } = t("homepageabout", { returnObjects: true });
    return children({ mainpagehead, mainpageheadsapn, mainpageabout,mainpageli1,mainpageli2,mainpageli3,mainpagebtn});
};
export default OurValue2;