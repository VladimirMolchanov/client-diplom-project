import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductsByIds } from "../../core/store/products";
import confirm from "../../../config.json";

const Product = () => {
    const { productId } = useParams();
    const product = useSelector(getProductsByIds(productId));
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
            <div className="container grid">
                <div className="product__img">
                    <img src={confirm.assetsEndpoint + product.img} alt="" />
                </div>
                <div className="product__info">
                    <h2 className="section__title section__title-gradient">
                        {product.name}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Product;
