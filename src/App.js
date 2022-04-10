import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./layouts/main";
import Products from "./layouts/products";

function App() {
    return (
        <Switch>
            <Route path="/products" component={Products} />
            <Route path="/" exact component={Main} />
            <Redirect to="/" />
        </Switch>
    );
}

export default App;
