import React, {useEffect, useState} from "react";
import BlaSignInStyleWrapper from "./SignIn.style";
import {FormattedMessage} from 'react-intl';
import { Button, Input, Checkbox } from "antd";
import actions from "../../redux/Auth/action";
import {useDispatch, useSelector} from "react-redux";
import agent from "../../core/api/restful";
import {Redirect, useLocation} from "react-router";

const SignIn = ({isLoggedIn}) => {
    let location = useLocation();
    let { from } = location.state || { from: { pathname: '/dashboard' } };
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
        return <Redirect to={from} />;
    }
    return (
        <BlaSignInStyleWrapper>
            <div className="h-100 d-flex justify-content-center justify-content-lg-center justify-content-sm-center align-items-center">
                <div className="d-flex justify-content-center rounded rounded-lg blaLoginContentWrapper">
                    <div className="blaLoginContent">
                        <div className="blaLogoWrapper">
                            <FormattedMessage id="signIn.logo" defaultMessage="BlackPaper"/>
                        </div>
                        <div className="form-group blaInputWrapper">
                            <Input
                                onChange={(event) => onUserChange(event.target.value)}
                                autoFocus={true}
                                placeholder="Username"
                                autoComplete="true" />
                        </div>
                        <div className="form-group blaInputWrapper">
                            <Input
                                onChange={(event) => onPassChange(event.target.value)}
                                type="password"
                                placeholder="Password" />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <Checkbox>
                                <FormattedMessage id="signIn.remember" defaultMessage="Remember me"/>
                            </Checkbox>
                            <Button type="default"
                                    ghost={true}
                                    loading={inLogin}
                                    className="ml-auto"
                                    onClick={event => login()}>
                                <FormattedMessage id="signIn.button" defaultMessage="Đăng nhập" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </BlaSignInStyleWrapper>
    );
}

export default SignIn;
