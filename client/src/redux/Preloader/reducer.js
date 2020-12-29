import actions from "./action";

const initState = {
    loggedIn: false,
    done: false,
    error: false
}

export default function preloaderReducer(state = initState, action) {
    switch (action.type) {
        case actions.CHECK_SESSION:
            if (action.error) return {error: true};
            if (!action.payload) return {error: true};
            return {done: true, loggedIn: action.payload.data === "OK"};
        case actions.NOT_LOGGED_IN:
            return {done: true, loggedIn: false};
        case actions.SET_LOGGED_IN:
            return {done: true, loggedIn: action.value};
        default:
            return state;
    }
}