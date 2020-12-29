import { lazy } from "react";

export const publicRoute = {
    SIGN_IN: {
        path: "/signin",
        component: lazy(() => import("../../../pages/Sigin/SignIn"))
    }
}

export const privateRoute = {
    LANDING: {
        path: "/",
        exact: true,
        component: lazy(() => import("../../../pages/Sigin/SignIn"))
    }
}
