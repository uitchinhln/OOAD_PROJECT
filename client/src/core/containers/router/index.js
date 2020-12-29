import React, {Suspense} from "react";
import ErrorBoundary from "../ErrorBoundary";
import {Route, BrowserRouter as Router, Switch, useLocation} from "react-router-dom";
import { Redirect } from "react-router";
import { publicRoute } from "./router.config"
import Loader from '../../../components/Loader/Loader';
import Dashboard from "../../../pages/Dashboard/Dashboard";

const PrivateRoute = ({children, isLoggedIn, ...rest}) => {
    let location = useLocation();
    if (isLoggedIn)
        return <Route {...rest}>{children}</Route>;
    return (
        <Redirect
            to={{
                pathname: publicRoute.SIGN_IN.path,
                state: { from: location },
            }}
        />
    );
}

const AppRoute = ({isLoggedIn}) => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <Router>
                    <Switch>
                        {Object.values(publicRoute).map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact}>
                                <route.component isLoggedIn={isLoggedIn} />
                            </Route>
                        ))}
                        <Route path="/dashboard">
                            <PrivateRoute isLoggedIn={isLoggedIn}>
                                <Dashboard/>
                            </PrivateRoute>
                        </Route>
                        <Route>
                            <Redirect
                                to={{
                                    pathname: publicRoute.SIGN_IN.path
                                }}
                            />
                        </Route>
                    </Switch>
                </Router>
            </Suspense>
        </ErrorBoundary>
    );
}

export default AppRoute;
