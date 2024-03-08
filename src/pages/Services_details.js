
import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import ServicesDetail from '../components/ServicesDetail';
import ServicesDetail1 from '../components/ServicesDetail1';
import ServicesDetail2 from '../components/ServicesDetail2';


export class Services_details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedService: 'DRILLING & WELL SERVICE'
        };
        // Bind the method to the class instance
        this.handleServiceClick = this.handleServiceClick.bind(this);
    }

    // Define the method within the class
    handleServiceClick(service) {
        this.setState({ selectedService: service });
    }
    render() {
        const { selectedService } = this.state;
        return (

            <div className="site-main">
                <Header />

                {/* PageHeader */}
                <PageHeader
                    title="services details"
                    breadcrumb="services"
                />
                {/* PageHeader end */}


                <div className="ttm-row sidebar ttm-sidebar clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            {/* Render the selected service detail based on the state */}
                    {selectedService === 'DRILLING & WELL SERVICE' && <ServicesDetail />}
                    {selectedService === 'MARINE SERVICE' && <ServicesDetail1 />}
                    {selectedService === 'DREDGING SERVICE' && <ServicesDetail2 />}
                    {/* Add other service details as needed */}

                            <div className="col-lg-4 widget-area">
                                <div className="sidebar-right">
                                    <aside className="widget widget-nav-menu">
                                        <ul>
                                            {/* <li><a className="active" href={process.env.PUBLIC_URL + '/services_details'}>DRILLING & WELL SERVICE</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/services_details'}>MARINE SERVICE</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/services_details'}>DREDGING SERVICE</a></li> */}
                                            {/* <li><a className={selectedService === 'DRILLING & WELL SERVICE' ? 'active' : ''} onClick={() => handleServiceClick('DRILLING & WELL SERVICE')} href={process.env.PUBLIC_URL + '/services_details'}>DRILLING & WELL SERVICE</a></li> */}
                                            <li><a className={selectedService === 'DRILLING & WELL SERVICE' ? 'active' : ''} onClick={() => this.handleServiceClick('DRILLING & WELL SERVICE')}>DRILLING & WELL SERVICE</a></li>
                                            <li><a className={selectedService === 'MARINE SERVICE' ? 'active' : ''} onClick={() => this.handleServiceClick('MARINE SERVICE')} >MARINE SERVICE</a></li>
                                            <li><a className={selectedService === 'DREDGING SERVICE' ? 'active' : ''} onClick={() => this.handleServiceClick('DREDGING SERVICE')} >DREDGING SERVICE</a></li>
                                            {/* <li><a href={process.env.PUBLIC_URL + '/services_details'}>MARINE SERVICE</a></li> */}
                                            {/* <li><a href={process.env.PUBLIC_URL + '/services_details'}>DREDGING SERVICE</a></li> */}

                                            {/* <li><a href={process.env.PUBLIC_URL + '/services_details'}>Forte Acquisition</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/services_details'}>Human Resource</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/services_details'}>Retained search</a></li> */}

                                        </ul>
                                    </aside>
                                    <aside className="widget widget-download">
                                        <ul className="download">
                                            <li><span className="download-img"><img src="images/pdf-img.png" alt="pdf-img" /></span>
                                                <span className="download-caption">
                                                    <span>Case Studies</span>
                                                    <h6>Audit & Assuarance</h6>
                                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-left ttm-btn-color-grey" href="/">
                                                        <i className="ti ti-arrow-right"></i>Download (3.5 MB)</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="widget widget-banner">
                                        <div className="ttm-col-bgcolor-yes bg-theme-DarkColor ttm-bg p-30 pb-50 pt-45">
                                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor">
                                                <div className="ttm-col-wrapper-bg-layer-inner"></div>
                                            </div>

                                            <div className="layer-content text-center text-theme-WhiteColor">
                                                <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-style-round ttm-icon_element-color-skincolor ttm-icon_element-size-xl">
                                                    <i className="far fa-comments"></i></div>
                                                <h3>Do You Need Any Help?</h3>
                                                <div className="ttm-horizontal_sep width-100 mt-25 mb-25"></div>
                                                <ul>
                                                    <li>+1 800 556 77 894</li>
                                                    <li>info@yourmailexample.com</li>
                                                </ul>
                                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
                                                ttm-btn-color-skincolor" href={process.env.PUBLIC_URL + '/contact_01'}>appoinments!</a>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default Services_details;