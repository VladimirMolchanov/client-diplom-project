import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsTable from "../components/productsTable";
import { getProducts, removeProduct } from "../../core/store/products";

const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts());
    const [sortBy] = useState({ path: "name", order: "asc" });

    const handleDelete = (productId) => {
        dispatch(removeProduct(productId));
    };
    const handleSort = () => {};

    const userCrop = products;

    return (
        <>
            <div className="main-header">
                <h1>Каталог</h1>
            </div>
            <div className="main-body">
                {userCrop && userCrop.length !== 0 && (
                    <ProductsTable
                        products={userCrop}
                        onSort={handleSort}
                        selectedSort={sortBy}
                        onDelete={handleDelete}
                    />
                )}
            </div>
        </>
    );
};

export default ProductsList;
