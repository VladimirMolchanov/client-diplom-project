import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import AppLoader from "./lib/core/components/hoc/app.Loader";
import ProtectedRoute from "./lib/core/components/protectedRoute";
import Login from "./lib/core/layouts/login";
import LogOut from "./lib/core/layouts/logOut";
import IndexAdmin from "./lib/admin/layouts/indexAdmin";
import Main from "./lib/public/layouts/main";
import "react-notifications/lib/notifications.css";
import "./assets/css/public.sass";
import "./assets/css/core/index.scss";
import ErrorLayout from "./lib/public/layouts/errorLayout";

function App() {
    return (
        <>
            <AppLoader>
                <Switch>
                    <Route path="/500" component={ErrorLayout} />
                    <ProtectedRoute path="/admin/" component={IndexAdmin} />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/" component={Main} />
                    <Redirect to="/" />
                </Switch>
            </AppLoader>
            <NotificationContainer />
        </>
    );
}

export default App;
