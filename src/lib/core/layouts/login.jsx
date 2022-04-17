import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RegisterForm from "../../public/components/registerForm";
import LoginForm from "../../public/components/loginForm";
import "../../../assets/css/login.sass";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );

    useEffect(() => {
        document.body.classList.add("login-panel");
        return () => {
            document.body.classList.remove("login-panel");
        };
    }, []);

    return (
        <div className="login">
            <div className="container">
                <div className="login-group-btn">
                    <button
                        className={
                            "button " + (formType === "login" ? "active" : "")
                        }
                        type="button"
                        onClick={() => {
                            setFormType("login");
                        }}
                    >
                        Sing In
                    </button>
                    <button
                        className={
                            "button " +
                            (formType === "register" ? "active" : "")
                        }
                        type="button"
                        onClick={() => {
                            setFormType("register");
                        }}
                    >
                        Sing Up
                    </button>
                </div>
                <div className="login-forms">
                    {formType === "register" ? <RegisterForm /> : <LoginForm />}
                </div>
            </div>
        </div>
    );
};

export default Login;
