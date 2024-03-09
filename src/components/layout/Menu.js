import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

export class Menu extends Component {
    state = {
        show: false,
    }
    render() {
        return (
            <BrowserRouter>
                <nav className="main-menu">
                    <ul className="menu">
                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/'} className="mega-menu-link">Home</a>
                            {/* <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/'}>Job Seeker</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/home2'}>Job Consultancy</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/home3'}>Human Resource</a></li>
                            </ul> */}
                        </li>
                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/About_us'} className="mega-menu-link">About Us</a>
                        </li>
                        <li className="mega-menu-item">
                        <a href={process.env.PUBLIC_URL + '/Services'} className="mega-menu-link">Services</a>
                        </li>
                        <li className="mega-menu-item">
                        <a href={process.env.PUBLIC_URL + '/Services_details'} className="mega-menu-link">Services Details</a>
                        </li>
                        <li className="mega-menu-item">
                        <a href={process.env.PUBLIC_URL + '/Contact_01'} className="mega-menu-link">Contact</a>
                        </li>

                        {/* <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/about_us'} className="mega-menu-link">Pages</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/about_us'}>About Us</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/services'}>Services</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/services_details'}>Services Details</a></li>                                
                                <li><a href={process.env.PUBLIC_URL + '/carrer_01'}>Carrer</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/login'}>Login</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/register'}>Register</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/error_404'}>Error 404</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/error_405'}>Error 405</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/contact_01'}>Contact us 01</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/contact_02'}>Contact us 02</a></li>
                            </ul>
                        </li> */}
                        {/* <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/job_list'} className="mega-menu-link">Jobs</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/job_list'}>Job List</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/job_details'}>Job Details</a></li>
                            </ul>
                        </li>
                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/employers_list'} className="mega-menu-link">Employers</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/employers_list'}>Employers List</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/employers_details'}>Employers Details</a></li>
                            </ul>
                        </li>
                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/candidate_list'} className="mega-menu-link">Candidates</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/candidate_list'}>Candidate List</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/candidate_details'}>Candidate Details</a></li>
                            </ul>
                        </li> */}
                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/Blog_classic'} className="mega-menu-link">Blog</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/Blog_classic'}>Blog Classic</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/Blog_grid'}>Blog Grid</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/Blog_details'}>Blog Details</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </BrowserRouter>
        )

    }
}

export default Menu;