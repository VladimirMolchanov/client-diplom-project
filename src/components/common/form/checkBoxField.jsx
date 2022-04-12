import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({
    index,
    name,
    value,
    checked,
    onChange,
    children,
    error
}) => {
    const handleChange = (event) => {
        const { target } = event;
        onChange({
            name,
            value,
            checked: target.checked
        });
    };
    const getInputClasses = () => {
        return "form-check-input" + (error ? " is-invalid" : "");
    };

    return (
        <div className="form__check">
            <input
                type="checkbox"
                className={getInputClasses()}
                value={value}
                id={name + index}
                onChange={handleChange}
                checked={checked}
            />
            <label className="form-check-label" htmlFor={name + index}>
                {children}
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};
CheckBoxField.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    error: PropTypes.string
};

export default CheckBoxField;
