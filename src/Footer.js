import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-contents">
                    <div className="footer-top">
                        <p>
                            Questions? Call :
                            <a href="tel:000-800-919-1690"> 000-800-919-1690</a>
                        </p>
                        <ul>
                            <li>
                                <span>FAQ</span>
                            </li>
                            <li>
                                <span>Help Centre</span>
                            </li>
                            <li>
                                <span>Account</span>
                            </li>
                            <li>
                                <span>Media Centre</span>
                            </li>
                            <li>
                                <span>Investor Relations</span>
                            </li>
                            <li>
                                <span>Jobs</span>
                            </li>
                            <li>
                                <span>Ways to Watch</span>
                            </li>
                            <li>
                                <span>Terms of Use</span>
                            </li>
                            <li>
                                <span>Privacy</span>
                            </li>
                            <li>
                                <span>Cookie Preference</span>
                            </li>
                            <li>
                                <span>Corporate Information</span>
                            </li>
                            <li>
                                <span>Contact Us</span>
                            </li>
                            <li>
                                <span>Speed Test</span>
                            </li>
                            <li>
                                <span>Legal Notices</span>
                            </li>
                            <li>
                                <span>Only on Netflix</span>
                            </li>
                        </ul>
                        <div className="language-picker">
                            <div className="language-picker-container">
                                <select name="languages">
                                    <option value="/in/">English</option>
                                    <option value="/in-hi/">Hindi</option>
                                </select>
                                <p className="footer-bottom">Netflix India</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
