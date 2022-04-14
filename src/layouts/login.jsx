import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    return (
        <div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setFormType("login");
                    }}
                >
                    Sing In
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setFormType("register");
                    }}
                >
                    Sing Up
                </button>
            </div>
            {formType === "register" ? <RegisterForm /> : <LoginForm />}
        </div>
    );
};

export default Login;
