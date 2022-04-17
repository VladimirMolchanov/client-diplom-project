import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "../../core/utils/validator";
import { cleanAuthError, getAuthError, singUp } from "../../core/store/users";
import TextField from "../../core/components/form/textField";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const errorAuth = useSelector(getAuthError());
    const [data, setData] = useState({
        email: "",
        password: "",
        name: ""
    });
    const [error, setError] = useState({});

    const handleChange = (target) => {
        if (errorAuth) {
            dispatch(cleanAuthError());
        }
        if (target) {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            min: {
                message: "Имя должен состоять минимум из 3 символов",
                value: 3
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязательна для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
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

        dispatch(singUp(data));
    };

    useEffect(() => {
        validate();
    }, [data]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="section__title section__title-gradient mb-4 text-center">
                    Регистрация
                </h1>
                <TextField
                    label="Имя"
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    error={error.name}
                />
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
                    className="button button--flex w-100 justify-content-center mb-2"
                >
                    Зарегистрироваться
                </button>
                <p className="text-error">{errorAuth}</p>
            </form>
        </div>
    );
};

export default RegisterForm;
