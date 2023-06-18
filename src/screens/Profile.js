import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import Navbar from "../Navbar";
import "./Profile.css";
import { auth } from "../firebase";
import Plans from "./Plans";

function Profile() {
    const user = useSelector(selectUser);
    return (
        <div className="profile">
            <Navbar />
            <div className="profile-body">
                <h1>Edit Profile</h1>
                <div className="profile-info">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Avatar" />
                    <div className="profile-details">
                        <h2>{user.email}</h2>
                        <div className="profile-plans">
                            <h3>Plans</h3>
                            <Plans />
                            <button className="profile-signout" onClick={() => auth.signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
