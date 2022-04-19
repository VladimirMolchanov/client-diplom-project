import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.png";
import { getBasket } from "../../core/store/basket";

const Header = () => {
    const basket = useSelector(getBasket());
    const totalPrice = basket.reduce(
        (price, product) => price + product.price * product.count,
        0
    );

    /* eslint-disable */
    useEffect(() => {
        function scrollHeader() {
            const header = document.getElementById("header");
            if (this.scrollY >= 50) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        }
        window.addEventListener("scroll", scrollHeader);

        return () => {
            window.removeEventListener("scroll", scrollHeader);
        };
    }, []);

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">
                    <img src={Logo} alt="Logo" />
                </Link>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/#home" className="nav__link">
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/#specs" className="nav__link">
                                Specs
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/#case" className="nav__link">
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
                    <Link to="/basket" className="nav__basket">
                        <div className="nav__basket" id="nav-toggle">
                            <div className="price">{totalPrice}</div>
                            <div className="icon">
                                <div>
                                    <i className="ri-shopping-bag-3-line" />
                                </div>
                                <div className="product__count">
                                    <span className="badge">
                                        {basket.length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>

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
