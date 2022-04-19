import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "../../core/components/form/textField";
import validator from "../../core/utils/validator";

const FormColors = ({ color, onSubmit, submit }) => {
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

    useEffect(() => {
        if (submit) {
            onSubmit(data);
        }
    }, [submit]);

    const [error, setError] = useState({});

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        onSubmit(data);
    };
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
                />
                <TextField
                    className="form-control"
                    label="Цвет"
                    name="color"
                    value={data.color}
                    onChange={handleChange}
                    npn
                    error={error.color}
                />
            </form>
        </div>
    );
};
FormColors.propTypes = {
    color: PropTypes.object,
    onSubmit: PropTypes.func,
    submit: PropTypes.bool
};
export default FormColors;
