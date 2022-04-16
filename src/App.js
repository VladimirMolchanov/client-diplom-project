import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./layouts/main";
import Products from "./layouts/products";
import AppLoader from "./components/ui/hoc/app.Loader";
import Basket from "./layouts/basket";
import Login from "./layouts/login";
import ProtectedRoute from "./components/common/protectedRoute";
import Admin from "./layouts/admin";
import LogOut from "./layouts/logOut";

function App() {
    return (
        <AppLoader>
            <Switch>
                <ProtectedRoute path="/admin/" component={Admin} />
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
