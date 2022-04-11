import React from "react";
import Header from "../components/common/header";
import Catalog from "../components/pages/products";

const Products = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Catalog />
            </main>
        </>
    );
};

export default Products;
