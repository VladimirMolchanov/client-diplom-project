import React from "react";
import { Redirect, Switch } from "react-router-dom";
import ProtectedRoute from "../../components/common/protectedRoute";
import ProductsList from "../pages/productsList";
import Product from "../pages/product";
import Dashboards from "../pages/dashboards";

const IndexAdmin = () => {
    return (
        <Switch>
            <ProtectedRoute
                path="/admin/product/:productId"
                component={Product}
            />
            <ProtectedRoute path="/admin/products" component={ProductsList} />
            <ProtectedRoute
                path="/admin/dashboards"
                exact
                component={Dashboards}
            />
            <Redirect to="/admin/dashboards" />
        </Switch>
    );
};

export default IndexAdmin;
