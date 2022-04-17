import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AppLoader from "./lib/core/components/hoc/app.Loader";
import ProtectedRoute from "./lib/core/components/protectedRoute";
import Login from "./lib/core/layouts/login";
import LogOut from "./lib/core/layouts/logOut";
import IndexAdmin from "./lib/admin/layouts/indexAdmin";
import Main from "./lib/public/layouts/main";
import "./assets/css/public.sass";

function App() {
    return (
        <AppLoader>
            <Switch>
                <ProtectedRoute path="/admin/" component={IndexAdmin} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/logout" component={LogOut} />
                <Route path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </AppLoader>
    );
}

export default App;
