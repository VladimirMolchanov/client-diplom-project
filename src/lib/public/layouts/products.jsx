import React from "react";
import Header from "../components/header";
import PaginationProvider from "../../core/hooks/pagination";
import Catalog from "../pages/products";

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
