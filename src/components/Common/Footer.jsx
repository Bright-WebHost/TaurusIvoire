import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';
import { useTranslation } from 'react-i18next';

var bgimage = require('./../../images/background/bg-site.png');

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = {logo: require('./../../images/All Taurus Ivoire/Taurus Ivoire logo.webp')};
    }
    
    updateFooterLogo = (updatedlogo) => {this.currentstate.logo = updatedlogo;}

    render() {
        
        return (
            <TranslationWrapper>
{({ toptext,topsub,topbtn,logobottomtext,rightheading,rightheading2,nav1,nav2,nav3,nav4,copyright}) => (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    <div className="container call-to-action-wrap bg-no-repeat bg-center" style={{ backgroundImage: 'url('+bgimage+')' }}>
                        <div className="p-a30 bg-primary ">
                            <div className="row">
                                <div className="col-md-8 col-sm-8">
                                    <div className="call-to-action-left text-white">
                                        <h4 className="text-uppercase m-b10 m-t0">{toptext}</h4>
                                        <span>{topsub}</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="call-to-action-right">
                                        <div className="widget_newsletter">
                                            <div className="newsletter-bx">
                                                {/* <form role="search" action="./">
                                                    <div className="input-group">
                                                        <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                        <span className="input-group-btn">
                                                            <button type="submit" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                                        </span>
                                                    </div>
                                                </form> */}
                                                 <div className="text-center p-t10">
                                                 <NavLink to={"/contactus"}><button type="submit" className="site-button btn-effect ">
                                              {topbtn}
                    </button></NavLink>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}><img src={this.currentstate.logo} alt="" /></NavLink>
                                        </div>
                                        <p className="max-w400">{logobottomtext}</p>
                                        <ul className="social-icons  mt-social-links">
{/* <li><NavLink to={"#"} className="fa fa-facebook" /></li> */}
<li>
  <a
    href="https://wa.me/2250789388888"
    className="fa fa-whatsapp"
    target="_blank"
    rel="noopener noreferrer"
  />
</li>
{/* <li><NavLink to={"#"} className="fa fa-instagram" /></li> */}
<li><a href={'mailto:Sales@TaurusIvoire.com'} className="fa fa-envelope" /></li>
{/* <li><a href='mailto:ali@taurusivoire.com' style={{color:'#999999'}}>ali@taurusivoire.com</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">{rightheading}</h4>
                                        <ul className="widget_address">
                                            <li>Abidjan, Cóte d’Ivoire </li>
                                            <li><a href='mailto:Sales@TaurusIvoire.com' style={{color:'#999999'}}>Sales@TaurusIvoire.com</a></li>
                                            <li><a href='tel:+225 27 23 407 006'  style={{color:'#999999'}}>+225 27 23 407 006</a> </li>
                                            {/* <li>(+298) 146-6543-480</li> */}
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">{rightheading2}</h4>
                                        <ul>
                                             <li><NavLink to={"/"}>{nav1}</NavLink></li>
                                            <li><NavLink to={"/about"}>{nav2}</NavLink></li>
                                            <li><NavLink to={"/services"}>{nav3}</NavLink></li>
                                           
                                            <li><NavLink to={"/contactus"}>{nav4}</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* TAGS */}
                                {/* <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget recent-posts-entry-date">
                                        <h4 className="widget-title">Resent Post</h4>
                                        <div className="widget-post-bx">
                                            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                                <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                                    <strong className="p-date">24</strong>
                                                    <span className="p-month">Mar</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="mt-post-info">
                                                    <div className="mt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-sidebar"}>On these beams, we’re building dreams.</NavLink></h6>
                                                    </div>
                                                    <div className="mt-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                                <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                                    <strong className="p-date">30</strong>
                                                    <span className="p-month">Jan</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="mt-post-info">
                                                    <div className="mt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-sidebar"}>We’ll be a sensation for you next renovation</NavLink></h6>
                                                    </div>
                                                    <div className="mt-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 29</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="mt-footer-bot-center">
                                   <a href='https://www.brightmedia.tech/' target='blank'><span className="copyrights-text">© 2024 Taurus Ivoire {copyright} Bright Media</span></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)}/>

            </>
            
        )}
        </TranslationWrapper>
        );
    };
};


const TranslationWrapper = ({ children }) => {
    const {t}=useTranslation()
    const {  toptext,topsub,topbtn,logobottomtext,rightheading,rightheading2,nav1,nav2,nav3,nav4,copyright} = t("footer", { returnObjects: true });
    return children({ toptext,topsub,topbtn,logobottomtext,rightheading,rightheading2,nav1,nav2,nav3,nav4,copyright});
};

export default Footer;