import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./layouts/main";
import Products from "./layouts/products";
import AppLoader from "./components/ui/hoc/app.Loader";

function App() {
    return (
        <AppLoader>
            <Switch>
                <Route path="/products" component={Products} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </AppLoader>
    );
}

export default App;
