import React from "react";
import Header from "../components/common/header";
import Catalog from "../components/pages/products";
import PaginationProvider from "../hooks/pagination";

const Products = () => {
    return (
        <>
            <Header />
            <main className="main">
                <PaginationProvider>
                    <Catalog />
                </PaginationProvider>
            </main>
        </>
    );
};

export default Products;
