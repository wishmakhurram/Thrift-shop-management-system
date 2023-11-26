// Footer.js

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faEnvelope,
  faLocationDot,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FaCcAmex, FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";


import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaRegClock } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleSubmit = () => {
    if (isValidEmail) {
      // Do something with the valid email
      console.log("Valid Email:", email);
    } else {
      // Handle invalid email
      console.log("Invalid Email:", email);
    }
  };
  return (
    <div style={{ backgroundColor: "#F2F2F2" }}>
      <div className="row about-container">
        <div className="col-md-3">
          <div className="footer1">
            <div className="footer-logo">
              <p>Contact Us</p>
            </div>
            <p
              style={{
                textAlign: "justify",
                marginRight: "50px",
                fontSize: "15px",
              }}
            >
              Morbi ullamcorper ligula sit amet efficitur pellentesque. Aliquam
              ornare quam tellus ultricies molestie tortor.
            </p>
            <div className="social-icons">
              <div>
                <span>
                  <span style={{ fontSize: "30px" }}>
                    <LiaPhoneVolumeSolid />
                  </span>{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginLeft: "15px",
                    }}
                  >
                    HOTLINE :
                  </span>{" "}
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      marginLeft: "5px",
                    }}
                  >
                    +92-325-4744800
                  </span>
                </span>
              </div>
              <div>
                <span>
                  <span style={{ fontSize: "30px" }}>
                    <MdMailOutline />
                  </span>{" "}
                  <span style={{ fontSize: "14px", marginLeft: "15px" }}>
                    info@example.com
                  </span>
                </span>
              </div>
              <div>
                <span>
                  <span style={{ fontSize: "30px" }}>
                    <FaRegClock />
                  </span>{" "}
                  <span style={{ fontSize: "15px", marginLeft: "15px" }}>
                    Monday till Friday 10 to 6 EST
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer1">
            <div className="footer-logo">
              <p>Help</p>
            </div>
            <div className="web-tabs">
              <ScrollLink
                className="web-tabs-txt"
                to="home"
                smooth={true}
                duration={500}
              >
                Help Center
              </ScrollLink>
              <a className="web-tabs-txt" to="/room">
                Shipping Info
              </a>
              <ScrollLink
                className="web-tabs-txt"
                to="service"
                smooth={true}
                duration={500}
              >
                Returns
              </ScrollLink>
              <ScrollLink
                className="web-tabs-txt"
                to="about"
                smooth={true}
                duration={500}
              >
                How To Order
              </ScrollLink>
              <ScrollLink
                className="web-tabs-txt"
                to="about"
                smooth={true}
                duration={500}
              >
                How To Track
              </ScrollLink>
              <ScrollLink
                className="web-tabs-txt"
                to="about"
                smooth={true}
                duration={500}
              >
                Size Guide
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer1">
            <div className="footer-logo">
              <p>Company</p>
            </div>
            <div className="web-tabs">
              <ScrollLink
                className="web-tabs-txt"
                to="home"
                smooth={true}
                duration={500}
              >
                About Us
              </ScrollLink>
              <a className="web-tabs-txt" to="/room">
                Our Blog
              </a>
              <ScrollLink
                className="web-tabs-txt"
                to="service"
                smooth={true}
                duration={500}
              >
                Careers
              </ScrollLink>
              <ScrollLink
                className="web-tabs-txt"
                to="about"
                smooth={true}
                duration={500}
              >
                Store Locations
              </ScrollLink>
              <ScrollLink
                className="web-tabs-txt"
                to="about"
                smooth={true}
                duration={500}
              >
                Testimonial
              </ScrollLink>
              <ScrollLink
                className="web-tabs-txt"
                to="about"
                smooth={true}
                duration={500}
              >
                Sitemap
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer1">
            <div className="footer-logo">
              <p>Newsletter</p>
            </div>
            <p
              style={{
                textAlign: "justify",
                marginRight: "50px",
                fontSize: "15px",
              }}
            >
              Get 15% off your first purchase! Plus, be the first to know about
              sales, new product launches, and exclusive offers!
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <input
                type="text"
                placeholder={"Your Email Address"}
                value={email}
                onChange={handleInputChange}
                style={{
                  flex: 1,
                  padding: "15px",
                  borderRadius: "30px",
                  border: "1px solid #ccc",
                  marginRight: "10px",
                }}
              />
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ cursor: "pointer" }}
                onClick={handleSubmit}
              />
              {!isValidEmail && (
                <p style={{ color: "#ff0000", margin: 0, fontSize: "12px",marginLeft:'10px' }}>
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <div className="social-icons1">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#fff", height: "50px", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '50px 90px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ color: "#000", fontSize: "16px", fontWeight: "500", margin: 0 }}>
            ©2023 All rights reserved by Muhammad Uzair
        </p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaCcAmex style={{ marginRight: '10px', fontSize: '35px', color: '#0074cc' }} />

      <FaCcMastercard style={{ marginRight: '10px', fontSize: '35px', color: '#eb001b' }} />

      <FaCcPaypal style={{ marginRight: '10px', fontSize: '35px', color: '#0070ba' }} />

      <FaCcVisa style={{ marginRight: '10px', fontSize: '35px', color: 'inherit' }} />
      </div>
    </div>
      {/* <div
        style={{ backgroundColor: "rgb(247,187,7)", height: "50px",display:'flex',flexDirection:'row',justifyContent:'space-around',}}
      >
        <p
          style={{
            color: "#000",
            fontSize: "16px",
            fontWeight: "500",
            paddingTop: "15px",
          }}
        >
          © 2023 Crowny Hotel. All rights reserved.
        </p>
        <p>

        </p>
      </div> */}
    </div>
  );
}
