import React from "react";
import { useSelector } from "react-redux";
import confirm from "../../../config.json";
import { getProducts } from "../../core/store/products";

const SectionProducts = () => {
    const products = useSelector(getProducts());
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
                                <img
                                    src={confirm.assetsEndpoint + product.img}
                                    alt=""
                                    className="products__img"
                                />
                                <h3 className="products__title">
                                    {product.name}
                                </h3>
                                <span className="products__price">
                                    ${product.price}
                                </span>

                                <button
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
