import React from "react";
import PropTypes from "prop-types";
import "./product.css";
import config from "../../config.json";

const Product = ({ _id, name, price, img, onShopping }) => {
    const handleClick = (id) => {
        onShopping(id);
    };
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
                    onClick={() => {
                        handleClick(_id);
                    }}
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
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    img: PropTypes.string,
    onShopping: PropTypes.func
};

export default Product;
