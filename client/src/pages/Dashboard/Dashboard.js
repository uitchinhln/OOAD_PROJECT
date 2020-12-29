import React from "react";
import {staffRoute, managerRoute} from "../../core/containers/router/router.config";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Layout, Menu} from "antd";

const { Header, Sider, Content } = Layout;

export default function Dashboard() {
    return (
        <Router>
            <Switch>
                {Object.values(staffRoute).map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact}>
                        <route.component />
                    </Route>
                ))}
                <Route>
                    <staffRoute.LANDING.component />
                </Route>
            </Switch>
        </Router>
    );
}
