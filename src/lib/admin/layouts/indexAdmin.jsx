import React, { useEffect } from "react";
import { Redirect, Switch } from "react-router-dom";
import ProductsList from "../pages/productsList";
import Product from "../pages/product";
import Dashboards from "../pages/dashboards";
import ProtectedRoute from "../../core/components/protectedRoute";
import "../../../assets/css/admin.sass";
import Sidebar from "../components/sidebar";
import { navItems } from "../constant/menu";
import Header from "../components/header";
import Settings from "../pages/settings";
const IndexAdmin = () => {
    useEffect(() => {
        document.body.classList.add("admin-panel");
        return () => {
            document.body.classList.remove("admin-panel");
        };
    }, []);

    return (
        <div className="admin-panel">
            <div className="container">
                <Sidebar nav={navItems} />
                <main>
                    <div className="content">
                        <Switch>
                            <ProtectedRoute
                                path="/admin/product/:productId"
                                component={Product}
                            />
                            <ProtectedRoute
                                path="/admin/products"
                                component={ProductsList}
                            />
                            <ProtectedRoute
                                path="/admin/dashboard"
                                component={Dashboards}
                            />
                            <ProtectedRoute
                                path="/admin/settings"
                                component={Settings}
                            />
                            <Redirect to="/admin/dashboard" />
                        </Switch>
                    </div>
                </main>
                <Header />
            </div>
        </div>
    );
};

export default IndexAdmin;
