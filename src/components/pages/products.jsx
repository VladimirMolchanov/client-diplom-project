import React from "react";
import Product from "../ui/product";
import img from "../../assets/img/product1.png";

const Products = () => {
    const products = [
        {
            _id: "0101",
            name: "Twilight",
            price: "249",
            img
        }
    ];

    return (
        <section className="products section">
            <div className="products__container container">
                <h2 className="section__title section__title-gradient text-left">
                    Beats by Dr. Dre
                </h2>

                <div className="products__header"></div>
                <div className="products__body">
                    <div className="products__filter"></div>
                    <div className="products__content">
                        {products &&
                            products.map((i) => <Product key={i._id} {...i} />)}
                    </div>
                </div>
                <div className="products__footer"></div>
            </div>
        </section>
    );
};

export default Products;
