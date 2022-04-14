import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import validator from "../../utils/validator";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState({});

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязательна для заполнения"
            }
        }
    };

    const handleChange = (target) => {
        if (target) {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
    };

    const validate = () => {
        const error = validator(data, validatorConfig);
        setError(error);
        return Object.keys(error).length === 0;
    };
    const isValid = Object.keys(error).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = {
            ...data
        };

        console.log(newData);
    };

    useEffect(() => {
        validate();
    }, [data]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Авторизация</h1>
                <TextField
                    label="Электронная почта"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={error.email}
                />
                <TextField
                    label="Пароль"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={error.password}
                />
                <button
                    type="submit"
                    disabled={!isValid}
                    className="btn btn-primary w-100 mx-auto"
                >
                    Авторизироваться
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
