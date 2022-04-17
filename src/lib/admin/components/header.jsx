import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="header-body">
                <div className="left">
                    <div className="logo">
                        <h2>
                            My<span className="danger">Panel</span>
                        </h2>
                    </div>
                    <div className="close" id="close-btn">
                        <span className="material-icons-sharp">close</span>
                    </div>
                </div>
                <div className="right">
                    <button id="menu-btn" type="button">
                        <span className="material-icons-sharp">menu</span>
                    </button>
                    <div className="theme-toggler">
                        <span className="material-icons-sharp active">
                            light_mode
                        </span>
                        <span className="material-icons-sharp">dark_mode</span>
                    </div>
                    <div className="profile">
                        <div className="info">
                            <p>
                                Hey, <b>Vladimir</b>
                            </p>
                            <small className="text-muted">Admin</small>
                        </div>
                        <div className="profile-photo">
                            <img
                                src="https://avatars.dicebear.com/api/avataaars/vladimir.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
