import React from 'react';
import Slider from 'react-slick';

const OurProject = () => {
    // render() {
        var slick_slider = {
          dots: false,
          arrow: false,
          autoplay: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 1,
  
          responsive: [ {
  
              breakpoint: 1199,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          },{
      
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
        };
        return (
            <>
                {/* job-list-section */}
                <section className="ttm-row job-list-section bg-theme-GreyColor ttm-bg z-index-1 clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-11">
                                {/* section title */}
                                <div className="section-title style2 mb-0">
                                    <div className="title-header">
                                        <h3>Find The <span className="text-theme-SkinColor">Best One!</span></h3>
                                        <h2 className="title">Jobs By Positions</h2>
                                    </div>
                                    <div className="title-desc">
                                        <p>We have over 30 years experience of Financial ,Marketing and Busness Solutions expertise,
                                            our goal is to maxnci reputation and financial.</p>
                                    </div>
                                </div>{/* section title end */}
                            </div>
                        </div>{/* row end */}
                        {/* row */}
                        <Slider className="row slick_slider slick-arrows-style2 pt-20 mb_10" {...slick_slider} rows={2} slidesToShow={4} arrows={true}>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-sketch"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>WebDesigner</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>25 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-expert"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Education Training</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>14 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-budget"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Accounting Finance</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>58 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-house"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Construction</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>20 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-human-resources-4"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Human Resource</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>28 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-telecommunication"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>CallCenter</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>58 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-restaurant"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Restaurants</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>17 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-healthcare"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Health</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>02 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-sketch"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>WebDesigner</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>25 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-expert"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Education Training</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>14 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                            </div>
                        </Slider>{/* row end */}
                    </div>
                </section>
                {/* job-list end */}
            </>

        );
    // }
}

export default OurProject;