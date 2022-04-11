import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">
                    <img src={Logo} alt="Logo" />
                </Link>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="active-link nav__link">
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/" className="active-link nav__link">
                                Specs
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/" className="active-link nav__link">
                                Case
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="/products"
                                className="active-link nav__link"
                            >
                                Products
                            </Link>
                        </li>
                    </ul>

                    <div className="nav__close">
                        <i className="ri-close-line" />
                    </div>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-function-line" />
                </div>
            </nav>
        </header>
    );
};

export default Header;
