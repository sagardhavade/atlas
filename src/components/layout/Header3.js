import React, { Component } from 'react'
import Menu from './Menu';
import Mobile_menu from './Mobile_menu';
import Logo from './Logo'
import Header_search from './Header_search'


export class Header extends Component {
    
    componentDidMount() {
        window.addEventListener('scroll', this.isSticky);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.isSticky);
    }

    isSticky = (e)=>{
        const header = document.querySelector('header');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-Sticky') : header.classList.remove('is-Sticky');
    };

    render() {        
        return (
                
            <header id="masthead" className="header ttm-header-style-03">
                {/* topbar */}
               <div className="top_bar bg-theme-GreyColor clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex">
                                        <div className="top_bar_contact_item">
                                            <div className="top_bar_icon">
                                                <i className="flaticon flaticon-phone-call"></i>
                                            </div>
                                            <span>(+01)123 456 789</span>  
                                        </div>
                                        <div className="top_bar_contact_item">
                                            <div className="top_bar_icon">
                                                <i className="flaticon flaticon-email"></i>
                                            </div>
                                            <span><a href="mailto:info@example.com">info@example.com</a></span>  
                                        </div>
                                        <div className="top_bar_contact_item">
                                            <div className="top_bar_icon">
                                                <i className="flaticon flaticon-placeholder"></i>
                                            </div>
                                            <span>Suite 20 Golden Street USA</span>  
                                        </div>
                                    </div>
                                    <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span bg-theme-GreyColor pl-20 ms-auto">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-GreyColor"></div>
                                        <div className="layer-content">
                                            <div className="media-block">
                                                <ul className="social-icons">
                                                    <li>
                                                        <a  className="facebook" href="/" rel="noopener" aria-label="facebook">
                                                            <i className="ti ti-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="twitter" href="/" rel="noopener" aria-label="twitter">
                                                            <i className="ti ti-twitter-alt"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="google" href="/" rel="noopener" aria-label="google">
                                                            <i className="ti ti-google"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="linkedin" href="/" rel="noopener" aria-label="linkedin">
                                                            <i className="ti ti-linkedin"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* topbar end */}
                {/* site-header-menu */}
                <div id="site-header-menu" className="site-header-menu border-top">
                    <div className="site-header-menu-inner ttm-stickable-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* site-navigation */}
                                    <div className="site-navigation d-flex align-items-center justify-content-between">
                                        {/* site-branding */}
                                        <div className="site-branding">
                                            <Logo/>
                                        </div>
                                        {/* site-branding end */}
                                        <div className="border-box-block ms-auto mr-20">
                                            <div className=" d-flex align-items-center justify-content-between">
                                                {/* menu */}
                                                <Menu/>
                                                <div className="mobile-menu"><Mobile_menu/></div>
                                                {/* menu end */}
                                            </div>
                                        </div>
                                        <div className="header_btn">
                                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border
                                            ttm-icon-btn-left ttm-btn-color-grey text-theme-DarkColor d-flex align-items-center">
                                                <i className="far fa-user fa-sm text-theme-DarkColor"></i><a href={process.env.PUBLIC_URL + '/register'}>sign up </a>
                                                <span className="ml-10 mr-10 alert-heading">/</span> 
                                                <i className="ti ti-lock fa-sm text-theme-DarkColor"></i><a href={process.env.PUBLIC_URL + '/login'}>login </a>
                                            </a>
                                        </div>
                                    </div>{/* site-navigation end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* site-header-menu end */}
                <div className="serach_bar bg-theme-SkinColor pt-20">
                    <div className="container">
                        <form id="b_search_Form" className="b_search_Form wrap-form d-block" method="post" action="#" data-mailchimp="true">
                            <div className="row row-equal-height ttm-boxes-spacing-20px">
                            <div className="col-md">
                                <label>
                                    <input type="text" id="keywords" placeholder="Keywords (e.g. Job Title)"/>
                                </label>
                            </div>
                            <div className="col-md">
                                <label>
                                    <input type="text" id="locations" placeholder="Locations (e.g. City, Counter)"/>
                                </label>
                            </div>
                            <div className="col-md">
                                <label>
                                    <input type="text" id="industry" placeholder="Industry (e.g. Design, Art)"/>
                                </label>
                            </div>
                            <div className="col-lg-2">
                                <label>
                                    <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
                                    ttm-btn-color-grey" type="submit">Find Job</button>
                                </label>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>            
            </header> 
            
        )
    }
}

export default Header;