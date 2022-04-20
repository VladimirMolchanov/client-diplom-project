import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getColorsByIds, getColorsLoadingStatus } from "../store/color";

const Color = ({ id }) => {
    const color = useSelector(getColorsByIds(id));
    const isLoading = useSelector(getColorsLoadingStatus());
    if (isLoading) return "Loading...";
    return (
        <div>
            {color && (
                <div
                    className="color-radius"
                    data-name={color.name}
                    style={{
                        background: color.color
                    }}
                >
                    {color.name}
                </div>
            )}
        </div>
    );
};
Color.propTypes = {
    id: PropTypes.string
};
export default Color;
