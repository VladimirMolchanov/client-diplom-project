import React from "react";
import { Link } from "react-router-dom";
import confirm from "../../../config.json";

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer__container container grid">
                <Link to="/" className="footer__logo">
                    <img
                        src={confirm.assetsEndpoint + "assets/image/logo.png"}
                        alt=""
                    />
                </Link>

                <div className="footer__content">
                    <h3 className="footer__title">Products</h3>

                    <ul className="footer__links">
                        <li>
                            <Link to="/products" className="footer__link">
                                Продукция
                            </Link>
                        </li>
                        <li>
                            <Link to="/basket" className="footer__link">
                                Корзина
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Support</h3>
                    <ul className="footer__links">
                        <li>
                            <Link to="/login" className="footer__link">
                                sing in
                            </Link>
                        </li>
                        <li>
                            <Link to="/login/register" className="footer__link">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <form action="" className="footer__form">
                        <input
                            type="email"
                            placeholder="email"
                            className="footer__input"
                        />
                        <button type="button" className="button button--flex">
                            <i className="ri-send-plane-line button__icon" />{" "}
                            Subscribe
                        </button>
                    </form>

                    <div className="footer__social">
                        <Link
                            to="/"
                            target="_blank"
                            className="footer__social-link"
                        >
                            <i className="ri-facebook-fill" />
                        </Link>
                        <Link
                            to="/"
                            target="_blank"
                            className="footer__social-link"
                        >
                            <i className="ri-instagram-fill" />
                        </Link>
                        <Link
                            to="/"
                            target="_blank"
                            className="footer__social-link"
                        >
                            <i className="ri-twitter-fill" />
                        </Link>
                    </div>
                </div>
            </div>

            <p className="footer__copy">
                <Link to="/" target="_blank" className="footer__copy-link">
                    &#169; Vladimir Molchanov. All right reserved
                </Link>
            </p>
        </footer>
    );
};

export default Footer;
