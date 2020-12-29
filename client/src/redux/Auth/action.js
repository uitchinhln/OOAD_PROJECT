const actions = {
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    SET_INLOGIN: "SET_INLOGIN",

    setInLogin: (value) => ({
        type: actions.SET_INLOGIN,
        value: value,
    }),
}

export default actions;