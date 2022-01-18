import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext";
import Button from "../Button/Button";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import classes from "./LoginForm.module.css";
const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            await login(email, password);
            navigate("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(err.message.split(" ")[2]);
        }
    };
    return (
        <Form className={classes.login} onSubmit={handleLogin}>
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
            <Button type="button" disabled={loading}>
                <span>Submit now</span>
            </Button>
            {error && <p class="error">{error}</p>}
            <div className="info">
                Don't have an account? <Link to="/register">Signup</Link>{" "}
                instead.
            </div>
        </Form>
    );
};

export default LoginForm;
