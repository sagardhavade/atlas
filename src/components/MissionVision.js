import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const MissionVision = () => {

    return (
        <> {/* padding_zero-section */}
            <section className="ttm-row padding_zero-section bg-layer bg-layer-equal-height mb-70 mb-md-0 clearfix">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-7 col-md-12">
                            {/* col-img-img-three */}
                            <div className="col-bg-img-three ttm-bg ttm-col-bgimage-yes ttm-left-span z-index-2">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" style={{ backgroundImage: 'url(images/slides/MissionVisionbg.png)' }}></div>
                                <div className="layer-content">
                                </div>
                                <img className="img-fluid col-bg-img-res" src="https://via.placeholder.com/1092x708?text=1092x708+col-bgimage-3.jpg" alt="bgimage" />
                            </div>{/* col-img-bg-img-one end */}
                        </div>
                        <div className="col-lg-5">
                            <div className="ttm-bg ttm-col-bgcolor-yes bg-theme-DarkColor ttm-bg ttm-right-span spacing-1 z-index-1">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor">
                                    <div className="ttm-col-wrapper-bg-layer-inner"></div>
                                </div>
                                <div className="layer-content text-theme-WhiteColor">
                                    {/* section title */}
                                    <div className="section-title">
                                        <div className="title-header">
                                            <h3>How <span className="text-theme-SkinColor">we are! </span></h3>
                                            <h2 className="title">Reliable & Cost Efficient Recruitment Agency</h2>
                                        </div>
                                    </div>{/* section title end */}
                                    <div className="ttm-tabs ttm-tab-style-01">
                                        <Tabs>
                                            <TabList className="tabs">
                                                <Tab className="tab"><a className="tab-1" tabIndex="0">Our Mision</a></Tab>
                                                <Tab className="tab"><a className="tab-2" tabIndex="0">Our Vision</a></Tab>
                                                <Tab className="tab"><a className="tab-3" tabIndex="0">Core Values</a></Tab>
                                            </TabList>
                                            <div className="content-tab mb_15">
                                                <TabPanel>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-3 col-sm-4">
                                                            <img className="img-fluid alignleft"
                                                                height="200" width="200" src="images/slides/Mission1.png" alt="image" />
                                                            <img className="img-fluid alignleft"
                                                                height="200" width="200" src="images/slides/Mission2.png" alt="image" />
                                                        </div>
                                                        <div className="col-lg-8 col-md-9 col-sm-8">
                                                            <div className="pt-15">
                                                                <p>As a leading entity in the crewing and manpower industry, we are headed by the dynamic leadership of Revinka &Renvin. They possess a deep understanding of the oil, gas, marine, as well as the white and blue-collar industries, and are committed to delivering top-tier services, ensuring a diverse pool of talent. We cultivate enduring progress, leveraging our technological expertise and organizational capabilities, while adhering strictly to business ethics. We assure a crew and workforce that are safety-conscious and environmentally responsible. Simultaneously, we are dedicated to enabling eligible candidates to access the best employment opportunities and excel in their respective careers.
                                                                </p>
                                                                {/* <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-WhiteColor">
                                                                    <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">To add value for our clients & candidates</div></li>
                                                                    <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">Agency manages the end-to-end process</div></li>
                                                                </ul> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-3 col-sm-4">
                                                            <img className="img-fluid alignleft" height="200" width="200" src="images/slides/Vision.png" alt="image" />
                                                        </div>
                                                        <div className="col-lg-8 col-md-9 col-sm-8">
                                                            <div className="pt-15">
                                                                {/* <p>Let's enable the discovery of opportunities by providing consistently superior solutions.
                                                                    To add value & respect individuality and diversity while growing...</p> */}
                                                                <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-WhiteColor">
                                                                    <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">To establish our reputation as a skilled supplier of exceptional services.</div></li>
                                                                    <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">To alleviate client workload by providing highly competent and dedicated candidates.</div></li>
                                                                    <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">To foster and sustain relationships with our clients built on trust and commitment over time.</div></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-3 col-sm-4">
                                                            <img className="img-fluid alignleft" height="200" width="200" src="images/slides/CoreValue/4.png" alt="image" />
                                                            <img className="img-fluid alignleft" height="200" width="200" src="images/slides/CoreValue/5.png" alt="image" />
                                                            <img className="img-fluid alignleft" height="200" width="200" src="images/slides/CoreValue/6.png" alt="image" />
                                                            <img className="img-fluid alignleft" height="200" width="200" src="images/slides/CoreValue/7.png" alt="image" />
                                                        </div>
                                                        <div className="col-lg-8 col-md-9 col-sm-8">
                                                            <div className="pt-15">
                                                                <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-WhiteColor">
                                                                    <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">Integrity</div></li>
                                                                    <p>We uphold the highest standards of honesty and ethics in all our interactions.</p>
                                                                    <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">Excellence</div></li>
                                                                    <p>We strive for excellence in everything we do, delivering exceptional results and service to our clients.</p>
                                                                    <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">Collaboration</div></li>
                                                                    <p>We foster a culture of collaboration, working together as a team to achieve our goals.</p>
                                                                    <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">Innovation</div></li>
                                                                    <p>We embrace innovation and continuously seek new and better ways to serve our clients and improve our processes.</p>
                                                                    <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">Respect</div></li>
                                                                    <p>We treat everyone with respect, valuing diversity and inclusivity in all aspects of our work.</p>
                                                                    <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">Accountability</div></li>
                                                                    <p>We take responsibility for our actions and outcomes, holding ourselves and each other accountable for our performance.</p>
                                                                    <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">Continuous Improvement</div></li>
                                                                    <p>We are committed to ongoing learning and development, continuously improving ourselves and our services to better meet the needs of our clients and stakeholders.</p>
                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* row end */}
                </div>
            </section>
            {/* padding_zero-section end */}
        </>
    );
}

export default MissionVision;