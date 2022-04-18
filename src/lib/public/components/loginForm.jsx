import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "../../core/utils/validator";
import TextField from "../../core/components/form/textField";
import { cleanAuthError, getAuthError, login } from "../../core/store/users";

const LoginForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const errorAuth = useSelector(getAuthError());

    const [touched, setTouched] = useState(false);
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

    const validate = () => {
        const error = validator(data, validatorConfig);
        setError(error);
        return Object.keys(error).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            setTouched(true);
            return;
        }
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
                <h1 className="section__title section__title-gradient mb-4 text-center">
                    Авторизация
                </h1>
                <TextField
                    className="form-control"
                    label="Электронная почта"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={error.email}
                    touch={touched}
                />
                <TextField
                    className="form-control"
                    label="Пароль"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={error.password}
                    touch={touched}
                />
                <button
                    type="submit"
                    className="button button--flex w-100 justify-content-center mb-2"
                >
                    Авторизироваться
                </button>
                <p className="text-error">{errorAuth}</p>
            </form>
        </div>
    );
};

export default LoginForm;
