import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    componentDidMount() {
        function loadScript(src) {
            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
            });
        }

        loadScript('./assets/js/masonary.js');
    }

    render() {
        return (
            <TranslationWrapper>
                {(t) => (
                    
                    <>
                        <div className={this.props.bgcolor !== '' ? `header-nav navbar-collapse collapse ${this.props.bgcolor}` : 'header-nav navbar-collapse collapse'}>
                            <ul className="nav navbar-nav">
                                <li>
                                    <NavLink to="/">{t("nav1")}</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">{t("nav2")}</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services">{t("nav3")}</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contactus">{t("nav4")}</NavLink>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </TranslationWrapper>
        );
    }
}

const TranslationWrapper = ({ children }) => {
    const { t } = useTranslation();
    return children(t);
};

export default Navigation;
