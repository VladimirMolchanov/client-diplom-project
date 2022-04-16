import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AppLoader from "./lib/core/components/hoc/app.Loader";
import ProtectedRoute from "./lib/core/components/protectedRoute";
import Login from "./lib/core/layouts/login";
import LogOut from "./lib/core/layouts/logOut";
import IndexAdmin from "./lib/admin/layouts/indexAdmin";
import Products from "./lib/public/layouts/products";
import Basket from "./lib/public/layouts/basket";
import Main from "./lib/public/layouts/main";
import "./App.css";

function App() {
    return (
        <AppLoader>
            <Switch>
                <ProtectedRoute path="/admin/" component={IndexAdmin} />
                <Route path="/products" component={Products} />
                <Route path="/basket" component={Basket} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/logout" component={LogOut} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </AppLoader>
    );
}

export default App;
