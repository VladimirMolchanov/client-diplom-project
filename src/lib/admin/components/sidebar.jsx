import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = ({ nav }) => {
    return (
        <aside>
            <div className="sidebar">
                {nav &&
                    nav.map((item) => (
                        <NavLink
                            key={"id_" + item.name}
                            to={item.to}
                            activeClassName="active"
                        >
                            <span className="material-icons-sharp">
                                {item.icon}
                            </span>
                            <h3>{item.name}</h3>
                        </NavLink>
                    ))}
            </div>
        </aside>
    );
};
Sidebar.propTypes = {
    nav: PropTypes.array
};

export default Sidebar;
