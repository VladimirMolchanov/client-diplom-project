import React, { useEffect } from "react";
import { NavLink, Redirect, Switch } from "react-router-dom";
import ProductsList from "../pages/productsList";
import Product from "../pages/product";
import Dashboards from "../pages/dashboards";
import ProtectedRoute from "../../core/components/protectedRoute";
import "../../../assets/css/admin.sass";
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
                <aside>
                    <div className="top">
                        <div className="logo">
                            <h2>
                                My<span className="danger">Panel</span>
                            </h2>
                        </div>
                        <div className="close" id="close-btn">
                            <span className="material-icons-sharp">close</span>
                        </div>
                    </div>

                    <div className="sidebar">
                        <NavLink to="/admin" activeClassName="active">
                            <span className="material-icons-sharp">
                                grid_view
                            </span>
                            <h3>Dashboard</h3>
                        </NavLink>
                        <NavLink to="/admin/users" activeClassName="active">
                            <span className="material-icons-sharp">
                                person_outline
                            </span>
                            <h3>Users</h3>
                        </NavLink>
                        <NavLink to="/admin/orders" activeClassName="active">
                            <span className="material-icons-sharp">
                                receipt_long
                            </span>
                            <h3>Order</h3>
                        </NavLink>
                        <NavLink to="/admin/products" activeClassName="active">
                            <span className="material-icons-sharp">
                                inventory
                            </span>
                            <h3>Products</h3>
                        </NavLink>
                        <NavLink to="/admin/settings" activeClassName="active">
                            <span className="material-icons-sharp">
                                settings
                            </span>
                            <h3>Settings</h3>
                        </NavLink>
                        <NavLink
                            to="/admin/product/add"
                            activeClassName="active"
                        >
                            <span className="material-icons-sharp">add</span>
                            <h3>Add product</h3>
                        </NavLink>
                        <NavLink to="/logout" activeClassName="active">
                            <span className="material-icons-sharp">logout</span>
                            <h3>Logout</h3>
                        </NavLink>
                    </div>
                </aside>
                <main>
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
                            path="/admin/dashboards"
                            exact
                            component={Dashboards}
                        />
                        <Redirect to="/admin/dashboards" />
                    </Switch>
                </main>

                <div className="right">
                    <div className="top">
                        <button id="menu-btn" type="button">
                            <span className="material-icons-sharp">menu</span>
                        </button>
                        <div className="theme-toggler">
                            <span className="material-icons-sharp active">
                                light_mode
                            </span>
                            <span className="material-icons-sharp">
                                dark_mode
                            </span>
                        </div>
                        <div className="profile">
                            <div className="info">
                                <p>
                                    Hey, <b>Vladimir</b>
                                </p>
                                <small className="text-muted">Admin</small>
                            </div>
                            <div className="profile-photo">
                                <img
                                    src="https://avatars.dicebear.com/api/avataaars/vladimir.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="recent-updates">
                        <h2>Recent Updates</h2>
                        <div className="updates">
                            <div className="update">
                                <div className="profile-photo">
                                    <img
                                        alt=""
                                        src="https://avatars.dicebear.com/api/avataaars/RecentUpdate1.svg"
                                    />
                                </div>
                                <div className="message">
                                    <p>
                                        <b>Mike Tyson</b> received his order of
                                        Night lion tech GPS drone.
                                    </p>
                                    <small className="text-muted">
                                        2 Minutes Ago
                                    </small>
                                </div>
                            </div>
                            <div className="update">
                                <div className="profile-photo">
                                    <img
                                        alt=""
                                        src="https://avatars.dicebear.com/api/avataaars/RecentUpdate2.svg"
                                    />
                                </div>
                                <div className="message">
                                    <p>
                                        <b>Mike Tyson</b> received his order of
                                        Night lion tech GPS drone.
                                    </p>
                                    <small className="text-muted">
                                        2 Minutes Ago
                                    </small>
                                </div>
                            </div>
                            <div className="update">
                                <div className="profile-photo">
                                    <img
                                        alt=""
                                        src="https://avatars.dicebear.com/api/avataaars/RecentUpdate3.svg"
                                    />
                                </div>
                                <div className="message">
                                    <p>
                                        <b>Mike Tyson</b> received his order of
                                        Night lion tech GPS drone.
                                    </p>
                                    <small className="text-muted">
                                        2 Minutes Ago
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sales-analytics">
                        <h2>Sales Analytics</h2>
                        <div className="item offline">
                            <div className="icon">
                                <span className="material-icons-sharp">
                                    local_mall
                                </span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>OFFLINE ORDERS</h3>
                                    <small className="text-muted">
                                        Last 24 Hours
                                    </small>
                                </div>
                                <h5 className="danger">-27%</h5>
                                <h3>1100</h3>
                            </div>
                        </div>
                        <div className="item online">
                            <div className="icon">
                                <span className="material-icons-sharp">
                                    shopping_cart
                                </span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>ONLINE ORDERS</h3>
                                    <small className="text-muted">
                                        Last 24 Hours
                                    </small>
                                </div>
                                <h5 className="success">+39%</h5>
                                <h3>3849</h3>
                            </div>
                        </div>
                        <div className="item customers">
                            <div className="icon">
                                <span className="material-icons-sharp">
                                    person
                                </span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>NEW CUSTOMERS</h3>
                                    <small className="text-muted">
                                        Last 24 Hours
                                    </small>
                                </div>
                                <h5 className="success">+25%</h5>
                                <h3>849</h3>
                            </div>
                        </div>
                        <div className="item add-product">
                            <div>
                                <span className="material-icons-sharp">
                                    add
                                </span>
                                <h3>Add Product</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexAdmin;
