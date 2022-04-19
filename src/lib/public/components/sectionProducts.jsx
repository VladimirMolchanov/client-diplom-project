import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import confirm from "../../../config.json";
import { getProducts } from "../../core/store/products";
import { addBasketProduct } from "../../core/store/basket";

const SectionProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts());
    const handleClick = (id) => {
        dispatch(addBasketProduct(products.find((i) => i._id === id)));
    };

    return (
        <section className="products section section__products" id="products">
            <h2 className="section__title section__title-gradient">
                Choose <br /> Your Style
            </h2>
            <div className="products__container container grid">
                {products &&
                    products.length !== 0 &&
                    products.map((product) => (
                        <article key={product._id} className="products__card">
                            <div className="products__content">
                                <Link to={`/product/${product._id}`}>
                                    <img
                                        src={
                                            confirm.assetsEndpoint + product.img
                                        }
                                        alt=""
                                        className="products__img"
                                    />
                                    <h3 className="products__title">
                                        {product.name}
                                    </h3>
                                    <span className="products__price">
                                        ${product.price}
                                    </span>
                                </Link>
                                <button
                                    onClick={() => {
                                        handleClick(product._id);
                                    }}
                                    type="button"
                                    className="button button--flex products__button"
                                >
                                    <i className="ri-shopping-bag-line button__icon" />
                                </button>
                            </div>
                        </article>
                    ))}
            </div>
        </section>
    );
};

export default SectionProducts;
