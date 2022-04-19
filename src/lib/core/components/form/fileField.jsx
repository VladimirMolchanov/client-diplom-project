import React from "react";
import PropTypes from "prop-types";

const FileField = ({ label, name, onChange }) => {
    const handleChange = (e) => {
        e.preventDefault();
        const { target } = e;
        onChange(target.files[0]);
    };
    return (
        <>
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                className="form-control"
                type="file"
                name={name}
                onChange={handleChange}
            />
        </>
    );
};
FileField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
};
export default FileField;
