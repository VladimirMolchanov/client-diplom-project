import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByIds } from "../../core/store/products";
import confirm from "../../../config.json";
import { addBasketProduct } from "../../core/store/basket";

const Product = () => {
    const { productId } = useParams();
    const product = useSelector(getProductsByIds(productId));

    const dispatch = useDispatch();
    const products = useSelector(getProducts());
    const handleClick = (id) => {
        dispatch(addBasketProduct(products.find((i) => i._id === id)));
    };

    if (!product) {
        return (
            <div className="product section">
                <div className="container grid">
                    <h2 className="section__title section__title-gradient">
                        Продукт не найден
                    </h2>
                    <Link to="/products" className="text-center link">
                        Перейти в каталог
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div className="product section">
            <div className="container grid product__container">
                <div className="product__img">
                    <img src={confirm.assetsEndpoint + product.img} alt="" />
                </div>
                <div className="product__info">
                    <h2 className="section__title section__title-gradient">
                        {product.name}
                    </h2>
                    <div className="btn__row">
                        <button
                            onClick={() => {
                                handleClick(product._id);
                            }}
                            type="button"
                            className="button button--flex"
                        >
                            <span className="button--flex">
                                <i className="ri-shopping-bag-line" /> Add to
                                Bag
                            </span>
                            <span className="home__price">
                                ${product.price}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
