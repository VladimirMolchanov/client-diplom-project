import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from "../common/form/textField";
import validator from "../../utils/validator";
import { login } from "../../store/users";

const LoginForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();

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
        /* eslint-disable */
        const redirect =
            // history.location.state && history.location.state.from.pathname ? history.location.state.from.pathname : "/";
            history.location.state ? history.location.state.from.pathname : "/";
        /* eslint-enable */
        dispatch(login({ payload: data, redirect }));
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
