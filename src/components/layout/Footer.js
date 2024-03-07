import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer widget-footer bg-theme-DarkColor text-theme-WhiteColor clearfix">
                <div className="second-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 widget-area">
                                <div className="widget widget_text clearfix">
                                    <div className="footer-logo">
                                        <img id="footer-logo-img" className="img-fluid auto_size" height="40" width="162" src="images/footer-logo.svg" alt="footer-logo" />
                                    </div>
                                    <p>HireCo is multi award-winning executive search, management recruiter and employer branding organization. 
                                        Our customized recruiting process delivers fast & accurate results</p>
                                    <div className="d-flex align-items-center pt-15 pb-25">
                                        <h6 className="fw-normal">Social Share: </h6>
                                        <div className="social-icons">
                                            <ul className="social-icons list-inline">
                                                <li><a href="#facebook" rel="noopener" aria-label="facebook">
                                                    <i className="ti ti-facebook"></i></a>
                                                </li>
                                                <li><a href="#twitter" rel="noopener" aria-label="twitter">
                                                    <i className="ti ti-twitter-alt"></i></a>
                                                </li>
                                                <li><a href="#instagram" rel="noopener" aria-label="instagram">
                                                    <i className="ti ti-instagram"></i></a>
                                                </li>
                                                <li><a href="#pinterest" rel="noopener" aria-label="pinterest">
                                                    <i className="ti ti-pinterest"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" 
                                    href={process.env.PUBLIC_URL + '/contact_01'}>Request A Free Quotes</a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                                <div className="widget widget-recent-post clearfix">
                                    <h3 className="widget-title">Recent Posts</h3>
                                    <ul className="widget-post ttm-recent-post-list">
                                        <li>
                                            <div className="post-detail">
                                                <div className="cat-link"><a href={process.env.PUBLIC_URL + '/blog_details'}>business</a></div>
                                                <a href={process.env.PUBLIC_URL + '/blog_details'}>Are  meetings falling to flat? Try these 10 tips</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="post-detail">
                                                <div className="cat-link"><a href={process.env.PUBLIC_URL + '/blog_details'}>business</a></div>
                                                <a href={process.env.PUBLIC_URL + '/blog_details'}>Are You Moving Businesses To Another State?</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="post-detail">
                                                <div className="cat-link"><a href={process.env.PUBLIC_URL + '/blog_details'}>business</a></div>
                                                <a href={process.env.PUBLIC_URL + '/blog_details'}>Shame: Does It Fine to Fit In The Workplace?</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                                <div className="widget widget-contact clearfix">
                                    <h3 className="widget-title">Quick Contact!</h3>
                                    <ul className="widget_contact_wrapper">
                                        <li>
                                            <i className="ttm-textcolor-skincolor flaticon-phone-call"></i>
                                            <h3>Call Us On:</h3>+92 777 555 0000</li>
                                        <li>
                                            <i className="ttm-textcolor-skincolor flaticon-placeholder"></i>
                                            <h3>Address:</h3>Suite 20 Golden Street USA</li>
                                        <li>
                                            <i className="ttm-textcolor-skincolor flaticon-email"></i>
                                            <h3>Email:</h3><a href="mailto:info@example.com">info@example.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-6">
                                <span className="copyright">Copyright © 2021 <a href={process.env.PUBLIC_URL + '/'}>HireCo </a>All rights reserved.
                                </span>
                                <ul className="footer-nav-menu">
                                    <li><a href={process.env.PUBLIC_URL + '/'}>Privacy & Policy</a></li>
                                    <li><a href={process.env.PUBLIC_URL + '/'}>Terms & Conditions</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 d-lg-flex align-items-center justify-content-between">
                                <form id="subscribe-form" className="subscribe-form">
                                    <div className="mailchimp-inputbox clearfix" id="subscribe-content"> 
                                        <input type="email" name="EMAIL" id="txtemail" placeholder="Enter Your Email Address..." required="" />
                                        <button className="submit ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-skincolor" type="submit">
                                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


