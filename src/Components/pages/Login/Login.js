import React from "react";
import Illustration from "../../Shared/Illustration/Illustration";
import LoginForm from "../../Shared/LoginForm/LoginForm";
import loginImage from "./../../../images/login.svg";

const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={loginImage} />
                <LoginForm></LoginForm>
            </div>
        </>
    );
};

export default Login;
