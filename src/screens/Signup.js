import React, { useRef } from "react";
import "./Signup.css";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Signup() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        }).then(() => {
            navigate("/profile");
        })
    };
    const signin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    };
    return (
        <div className="signup">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" ref={emailRef} />
                <input type="password" placeholder="Password" ref={passwordRef} />
                <button type="submit" onClick={signin}>Sign In</button>

                <h4><span className="login-gray">New to Netflix? </span>
                    <span className="login-link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
}

export default Signup;
