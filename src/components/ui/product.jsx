import React from "react";
import PropTypes from "prop-types";
import "./product.css";
import config from "../../config.json";

const Product = ({ name, price, img }) => {
    return (
        <div className="products__card">
            <div className="products__content">
                <img
                    src={config.assetsEndpoint + img}
                    alt=""
                    className="products__img"
                />
                <h3 className="products__title">{name}</h3>
                <span className="products__price">${price}</span>
                <button
                    className="button button--flex products__button"
                    type="button"
                >
                    <i className="ri-shopping-bag-line button__icon" />
                </button>
            </div>
        </div>
    );
};
Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    img: PropTypes.string
};

export default Product;
