import actions from "./action";

const initState = {
    inLogin: false,
    token: null,
    data: null,
}


export default function authReducer(state = initState, action) {
    switch (action.type) {
        case actions.SET_INLOGIN:
            return {inLogin: action.value}
        case actions.LOGIN_SUCCESS:
            return {inLogin: false, token: action.token};
        case actions.LOGIN_FAILURE:
            return {inLogin: false, token: null};
        default:
            return state;
    }
}
