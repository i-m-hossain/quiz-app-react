import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import classes from "./SignupForm.module.css";
const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState();
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError("password did not match");
        }
        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            navigate("/");
        } catch (err) {
            setError(err.message.split(" ")[2]);
            setLoading(false);
            console.log(err);
        }
    };
    return (
        <Form className={`${classes.signup}`} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                required
                placeholder="Enter your name"
                icon="person"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
                type="email"
                required
                placeholder="Enter email"
                icon="alternate_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                type="password"
                required
                placeholder="Enter password"
                icon="lock"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
                type="password"
                required
                placeholder="Confirm password"
                icon="lock_clock"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <CheckBox
                text="I agree to the Terms &amp; Conditions"
                required
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
            />
            <Button disabled={loading} type="submit">
                <span>Submit now</span>
            </Button>
            {error && <p className="error">{error}</p>}
            <div className="info">
                Already have an account? <Link to="/login">Login</Link>
                instead.
            </div>
        </Form>
    );
};

export default SignupForm;
