import React from "react";
import Header from "../components/common/header";
import BasketPage from "../components/pages/basket";

const Basket = () => {
    return (
        <>
            <Header />
            <main className="main">
                <BasketPage />
            </main>
        </>
    );
};

export default Basket;
