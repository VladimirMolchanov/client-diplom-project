import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TextField = ({
    label,
    type,
    name,
    value,
    onChange,
    error,
    placeholder,
    touch
}) => {
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        setTouched(touch);
    }, [touch]);

    const [showPassword, setShowPassword] = useState(false);
    const getInputClasses = () => {
        return "form-control" + (touched && error ? " is-invalid" : "");
    };
    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };
    const handleChange = ({ target }) => {
        setTouched(true);
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="mb-4">
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}
                </label>
            )}
            <div className="input-group has-validation">
                <input
                    className={getInputClasses()}
                    type={showPassword ? "text" : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
                {type === "password" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={
                                "ri-eye" +
                                (showPassword ? "-off-line" : "-line")
                            }
                        />
                    </button>
                )}
                {touched && error && (
                    <div className="invalid-feedback">{error}</div>
                )}
            </div>
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    touch: PropTypes.bool
};

export default TextField;
