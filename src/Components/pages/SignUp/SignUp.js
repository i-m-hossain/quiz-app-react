import React from "react";
import Illustration from "../../Shared/Illustration/Illustration";
import SignupForm from "../../Shared/SignupForm/SignupForm";
import image from "./../../../images/signup.svg";
const SignUp = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration image={image} />
                <SignupForm />
            </div>
        </>
    );
};

export default SignUp;
