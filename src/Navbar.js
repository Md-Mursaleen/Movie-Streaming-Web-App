import React, { useEffect, useState } from 'react';
import './Navbar.css';
import db from './firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function Navbar() {
    const [subscription, setSubscription] = useState(null);
    const user = useSelector(selectUser);
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);
    useEffect(() => {
        db.collection("customers").doc(user.uid).collection("subscriptions").get().then(querySnapshot => {
            querySnapshot.forEach(async subscription => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds
                });
            });
        });
    }, [user.uid]);
    return (
        <div className={`navbar ${show && "navbar_black"}`}>
            <div className="nav_contents">
                <img
                    onClick={() => { subscription && navigate("/") }}
                    className="nav_logo"
                    src={require("../src/assets/net_logo.png")}
                    alt="Netflix Logo" />
                <img
                    onClick={() => navigate("/profile")}
                    className="nav_avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Avatar" />
            </div>
        </div>
    );
}

export default Navbar;
