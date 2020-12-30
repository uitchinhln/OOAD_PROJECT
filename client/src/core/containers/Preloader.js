import React, {useEffect} from "react";
import agent from "./../api/restful";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import actions from "./../../redux/Preloader/action";
import * as fingerLoader from "./../../assets/lotties/fingerprint.json";
import * as maintenanceAnimation from "./../../assets/lotties/under-construction.json";
import {useSelector, useDispatch} from "react-redux";
import AppRoute from "./router";

const fingerConfig = {
    loop: true,
    autoplay: true,
    animationData: fingerLoader.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

const maintenanceConfig = {
    loop: true,
    autoplay: true,
    animationData: maintenanceAnimation.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

const Preloader = () => {
    const { error, done, loggedIn } = useSelector(state => state.Preloader);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("id_token");
        if (token) {
        //     agent.setToken(token);
        //     dispatch({type: actions.CHECK_SESSION, payload: agent.Auth.current()});
        // } else {
        //     dispatch({type: actions.NOT_LOGGED_IN});
            dispatch(actions.setLoggedIn(true));
        } else {
            dispatch({type: actions.NOT_LOGGED_IN});
        }
    }, [dispatch]);

    return (
        <section style={{height: "100vh"}}>
            {error ? (
                <div className="h-100 d-flex justify-content-center align-items-center">
                    <FadeIn>
                        <div className="align-items-center row">
                            <Lottie options={maintenanceConfig} height={400} width={400} />
                        </div>
                    </FadeIn>
                </div>
            ) : done ? (
                <AppRoute isLoggedIn={loggedIn}/>
            ) : (
                <div className="h-100 d-flex justify-content-center align-items-center">
                    <FadeIn>
                        <div className="align-items-center row">
                            <Lottie options={fingerConfig} height={400} width={400} />
                        </div>
                    </FadeIn>
                </div>
            )}
        </section>
    );
}

export default Preloader;
