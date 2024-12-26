import React from "react";
import "./Footer.css";

const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <div className="logo-section">
        <h1>Neptune</h1>
        <div className="logo-circle"></div>
        <div className="logo-triangle"></div>
      </div>
      <div className="menu-section">
        <div className="menu-column">
          <h3>NEPTUNE</h3>
          <ul>
            <li>Overview</li>
            <li>Easier SAP Fiori</li>
            <li>Low-Code</li>
            <li>No-Code for Business</li>
            <li>AI for SAP</li>
            <li>SAP Integration</li>
            <li>SAP BTP</li>
            <li>SAP S/4HANA</li>
          </ul>
        </div>
        <div className="menu-column">
          <h3>CASE STUDIES</h3>
          <ul>
            <li>Vattenfall</li>
            <li>Rust-Oleum</li>
            <li>Hitachi</li>
            <li>Elkjøp</li>
            <li>DFØ</li>
          </ul>
        </div>
        <div className="menu-column">
          <h3>TYPICAL USE CASES</h3>
          <ul>
            <li>Human Capital Management</li>
            <li>Warehouse & Logistics</li>
            <li>Plant Maintenance</li>
            <li>Supply Chain</li>
          </ul>
        </div>
        <div className="menu-column">
          <h3>INDUSTRIES</h3>
          <ul>
            <li>Retail</li>
            <li>Manufacturing</li>
            <li>Healthcare</li>
            <li>Energy</li>
            <li>Utilities</li>
            <li>Food & Beverage</li>
            <li>Government</li>
          </ul>
          <h3>THE COMPANY</h3>
          <ul>
            <li>News & Events</li>
            <li>Company</li>
            <li>Careers</li>
            <li>Awards & Recognitions</li>
            <li>Contact Us</li>
            <li>Partner</li>
          </ul>
        </div>
        <div className="menu-column">
          <h3>RESOURCES</h3>
          <ul>
            <li>Articles</li>
            <li>Videos</li>
            <li>Whitepapers</li>
          </ul>
          <h3>DEVELOPER AREA</h3>
          <ul>
            <li>Documentation</li>
            <li>Developer Community</li>
            <li>E-learning</li>
            <li>Portal Login</li>
            <li>Free trial</li>
            <li>Suport</li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default FooterMenu;
