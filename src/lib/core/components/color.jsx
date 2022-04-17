import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getColorsByIds } from "../store/color";

const Color = ({ id }) => {
    const color = useSelector(getColorsByIds(id));

    return <div>{color.name}</div>;
};
Color.propTypes = {
    id: PropTypes.string
};
export default Color;
