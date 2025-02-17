import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthDetails } from "../Other/AuthDetails";
import { Link } from "react-router-dom";
import "./SignIn.css"; // Import your CSS file for styling

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="signin">
            <AuthDetails />
            <div className="sign-in-container">
                <form onSubmit={signIn}>
                    <h1>Log In to Your Account</h1>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                    <button type="submit" className="sign-in-button">
                        Log In
                    </button>
                </form>
                <Link to={"/signUp"}>
                    <button className="create-account-button">
                        Create New Account
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default SignIn;
