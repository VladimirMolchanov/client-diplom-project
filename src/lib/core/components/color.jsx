import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getColorsByIds } from "../store/color";

const Color = ({ id }) => {
    const color = useSelector(getColorsByIds(id));
    if (!color) return "Loading...";
    return (
        <div
            className="color-radius"
            data-name={color.name}
            style={{
                background: color.color
            }}
        >
            {color.name}
        </div>
    );
};
Color.propTypes = {
    id: PropTypes.string
};
export default Color;
