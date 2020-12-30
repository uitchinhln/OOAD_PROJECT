import { lazy } from "react";

export const publicRoute = {
    SIGN_IN: {
        path: "/signin",
        component: lazy(() => import("../../../pages/Sigin/SignIn"))
        //component: lazy(() => import("../../../pages/Sale"))
    }
}

export const staffRoute = {
    LANDING: {
        path: "/",
        exact: true,
        component: lazy(() => import("../../../pages/Sale"))
    }
}

export const managerRoute = {
    LANDING: {
        path: "/",
        exact: true,
        component: lazy(() => import("../../../pages/Sigin/SignIn"))
    }
}
