import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductsByIds } from "../../core/store/products";
import ProductForm from "../components/productForm";

const Product = () => {
    const { productId } = useParams();

    const product = useSelector(getProductsByIds(productId));

    return (
        <>
            <div className="main-header">
                <h1>Каталог</h1>
            </div>
            <div className="main-body">
                <ProductForm product={product} create={productId === "add"} />
            </div>
        </>
    );
};

export default Product;
