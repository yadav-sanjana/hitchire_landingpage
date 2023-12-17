import React, { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import Category from "../components/category";
import Jobs from "../components/jobs";
import BoxIcon from "../components/boxicon";
import Employer from "../components/employer";
import Testimonials from "../components/testimonials";
import Partner from "../components/partner";
import dataCate from "../assets/fakeData/dataCategory";
import dataJobs from "../assets/fakeData/dataJobs";
import dataEm from "../assets/fakeData/dataEmployers";
import dataTestimonials from "../assets/fakeData/dataTestimonials";
import dataPartner from "../assets/fakeData/dataPartner";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PopUpForm from "../components/popup";

Home.propTypes = {};

function Home(props) {
    const [toggle, setToggle] = useState({
        key: "",
        status: false,
    });
    const [isShowMobile, setShowMobile] = useState(false);

    const handleToggle = (key) => {
        if (toggle.key === key) {
            setToggle({
                status: false,
            });
        } else {
            setToggle({
                status: true,
                key,
            });
        }
    };

    const handleMobile = () => {
        const getMobile = document.querySelector(".menu-mobile-popup");
        setShowMobile(!isShowMobile);
        !isShowMobile
            ? getMobile.classList.add("modal-menu--open")
            : getMobile.classList.remove("modal-menu--open");
    };

    useEffect(() => {
        const WOW = require("wowjs");
        window.wow = new WOW.WOW({
            live: false,
        });
        window.wow.init();
    }, []);

    useEffect(() => {
        const getPopup = document.querySelector(".wd-popup-form");
        setTimeout(() => {
            getPopup.classList.add("modal-menu--open");
        }, 3000);
    }, []);

    return (
        <>
            <PopUpForm />

            <div className="menu-mobile-popup">
                <div className="modal-menu__backdrop" onClick={handleMobile}></div>
                <div className="widget-filter">
                    <div className="mobile-header">
                        <div id="logo" className="logo">
                            <Link to="/">
                                <img className="site-logo" src={logo} alt="Image" />
                            </Link>
                        </div>
                        <Link className="title-button-group"
                        //  onClick={handleMobile}
                        >
                            <i className="icon-close"></i>
                        </Link>
                    </div>

                    <Tabs className="tf-tab">
                        {/* <TabList className="menu-tab">
                            <Tab className="user-tag">Menu</Tab>
                            <Tab className="user-tag">Categories</Tab>
                        </TabList> */}

                        <div className="content-tab">
                            <TabPanel className="header-ct-center menu-moblie animation-tab">
                                <div className="nav-wrap">
                                    <nav className="main-nav mobile">
                                        <ul id="menu-primary-menu" className="menu">
                                            <li className="menu-item">
                                                <Link
                                                    to="/"
                                                    className="iteam-menu"

                                                >
                                                    Home
                                                </Link>
                                            </li>

                                            <li className="menu-item menu-item-has-children-mobile">
                                                <Link
                                                    to="#"
                                                    className="iteam-menu"
                                                // onClick={() => {
                                                //     handleToggle("job");
                                                // }}
                                                >
                                                    Find jobs
                                                </Link>

                                            </li>

                                            <li className="menu-item menu-item-has-children-mobile">
                                                <Link
                                                    to="#"
                                                    className="iteam-menu"
                                                >
                                                    Employers
                                                </Link>

                                            </li>
                                            <li className="menu-item menu-item-has-children-mobile">
                                                <Link
                                                    to="#"
                                                    className="iteam-menu"

                                                >
                                                    Candidates
                                                </Link>

                                            </li>
                                            <li className="menu-item menu-item-has-children-mobile">
                                                <Link
                                                    to="#"
                                                    className="iteam-menu"

                                                >
                                                    Blog
                                                </Link>

                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </TabPanel>

                        </div>
                    </Tabs>

                    <div className="header-customize-item button">
                        <Link to="/">Upload Resume</Link>
                    </div>

                    <div className="mobile-footer">
                        <div className="icon-infor d-flex aln-center">
                            <div className="icon">
                                <span className="icon-call-calling">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                </span>
                            </div>
                            <div className="content">
                                <p>Need help? 24/7</p>
                                <h6>
                                    <Link to="tel:0123456678">001-1234-88888</Link>
                                </h6>
                            </div>
                        </div>
                        <div className="wd-social d-flex aln-center">
                            <ul className="list-social d-flex aln-center">
                                <li>
                                    <Link to="#">
                                        <i className="icon-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="icon-linkedin2"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="icon-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="icon-pinterest"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="icon-instagram1"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="icon-youtube"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Header clname="act1" handleMobile={handleMobile} />
            <Banner />

            <Category data={dataCate} className="job-category-section" />

            <Jobs data={dataJobs} className="jobs-section-three" />

            <BoxIcon />

            <Employer data={dataEm} className="employer-section" />

            <Testimonials data={dataTestimonials} className="testimonials-section" />

            <Partner data={dataPartner} />

            <Footer />

            <Gotop />
        </>
    );
}

export default Home;
