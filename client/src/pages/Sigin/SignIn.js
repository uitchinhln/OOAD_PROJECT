import React, {useEffect, useState} from "react";
import BlaSignInStyleWrapper from "./SignIn.style";
import {FormattedMessage} from 'react-intl';
import {Button, Input} from "antd";
import actions from "../../redux/Auth/action";
import {useDispatch, useSelector} from "react-redux";
import agent from "../../core/api/restful";
import {Redirect, useLocation} from "react-router";

const SignIn = ({isLoggedIn}) => {
    let location = useLocation();
    let {from} = location.state || {from: {pathname: '/dashboard'}};
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const inLogin = useSelector(state => state.Auth.inLogin);
    const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            setRedirectToReferrer(true);
        }
    }, [isLoggedIn]);

    const onPassChange = (value) => {
        setPassword(value);
    }

    const onUserChange = (value) => {
        setUsername(value);
    }

    const login = () => {
        dispatch({type: actions.LOGIN_REQUEST, payload: agent.Auth.login(username, password)});
        dispatch(actions.setInLogin(true));
    }

    if (redirectToReferrer) {
        return <Redirect to={from}/>;
    }
    return (
        <BlaSignInStyleWrapper>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row">
                                    <img src="https://i.imgur.com/CXQmsmF.png" className="logo"/>
                                </div>
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                    <img src="https://i.imgur.com/uNGdWHi.png" className="image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row mb-4 px-3">

                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="line"></div>
                                    <small className="or text-center">
                                        <FormattedMessage id="signIn.title" defaultMessage="Đăng nhập hệ thống"/>
                                    </small>
                                    <div className="line"></div>
                                </div>
                                <div className="row px-3"><label className="mb-1">
                                    <h6 className="mb-0 text-sm">
                                        <FormattedMessage id="signIn.label.username" defaultMessage="Tên đăng nhập"/>
                                    </h6>
                                </label>
                                    <Input
                                        onChange={(event) => onUserChange(event.target.value)}
                                        autoFocus={true}
                                        disabled={inLogin}
                                        className="mb-4"
                                        placeholder="Enter a valid email address"
                                        autoComplete="true"/>
                                </div>
                                <div className="row px-3">
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">
                                            <FormattedMessage id="signIn.label.password" defaultMessage="Mật khẩu"/>
                                        </h6>
                                    </label>
                                    <Input
                                        onChange={(event) => onPassChange(event.target.value)}
                                        type="password"
                                        disabled={inLogin}
                                        placeholder="Enter password"/>
                                </div>
                                <div className="row px-3 mb-4">

                                </div>
                                <div className="row mb-3 px-3 justify-content-between">
                                    <Button type="default"
                                            loading={inLogin}
                                            className="btn btn-blue text-center"
                                            onClick={event => login()}>
                                        <FormattedMessage id="signIn.button" defaultMessage="Đăng nhập"/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue py-4">
                        <div className="row px-3">
                            <small className="ml-4 ml-sm-5 mb-2">
                                Copyright &copy; 2020. All rights reserved.
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </BlaSignInStyleWrapper>
    );
}

export default SignIn;
