import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/products";
import ProductsTable from "../components/productsTable";

const ProductsList = () => {
    const products = useSelector(getProducts());
    const [sortBy] = useState({ path: "name", order: "asc" });

    const handleDelete = () => {};
    const handleSort = () => {};

    const userCrop = products;

    return (
        <ProductsTable
            products={userCrop}
            onSort={handleSort}
            selectedSort={sortBy}
            onDelete={handleDelete}
        />
    );
};

export default ProductsList;
