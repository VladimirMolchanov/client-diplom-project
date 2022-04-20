import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "../../core/components/form/textField";
import validator from "../../core/utils/validator";

const FormColors = ({ color, onSubmit, submit, setSubmit }) => {
    const [data, setData] = useState({
        name: color?.name || "",
        color: color?.color || ""
    });
    useEffect(() => {
        setData({
            name: color?.name || "",
            color: color?.color || ""
        });
    }, [color]);

    const [error, setError] = useState({});
    const [touched, setTouched] = useState(false);

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Поле имя обязательна для заполнения"
            }
        },
        color: {
            isRequired: {
                message: "Цвет обязателен для заполнения"
            }
        }
    };

    const validate = () => {
        const error = validator(data, validatorConfig);
        setError(error);
        return Object.keys(error).length === 0;
    };

    const handleChange = (target) => {
        if (target) {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
    };

    const handleSubmit = () => {
        const isValid = validate();
        if (!isValid) {
            setTouched(true);

            setSubmit(false);
            return;
        }

        onSubmit(data);
    };

    useEffect(() => {
        if (submit) {
            handleSubmit();
        }
    }, [submit]);

    useEffect(() => {
        validate();
    }, [data]);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    className="form-control"
                    label="Наименование"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    error={error.name}
                    touch={touched}
                />
                <TextField
                    className="form-control"
                    label="Цвет"
                    name="color"
                    value={data.color}
                    onChange={handleChange}
                    npn
                    error={error.color}
                    touch={touched}
                />
            </form>
        </div>
    );
};
FormColors.propTypes = {
    color: PropTypes.object,
    onSubmit: PropTypes.func,
    setSubmit: PropTypes.func,
    submit: PropTypes.bool
};
export default FormColors;
