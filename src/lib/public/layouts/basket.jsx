import React from "react";
import Header from "../components/header";
import BasketPage from "../pages/basket";

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
