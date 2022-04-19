import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../components/header";
import Products from "./products";
import Basket from "./basket";
import Home from "../pages/home";
import Footer from "../components/footer";

const Main = () => {
    useEffect(() => {
        document.body.classList.add("public-panel");
        return () => {
            document.body.classList.remove("public-panel");
        };
    }, []);

    return (
        <>
            <Header />
            <Switch>
                <Route path="/products" component={Products} />
                <Route path="/basket" component={Basket} />
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
};

export default Main;
