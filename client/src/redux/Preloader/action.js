const actions = {
    CHECK_SESSION: "CHECK_SESSION",
    NOT_LOGGED_IN: "NOT_LOGGED_IN",
    SET_LOGGED_IN: "SET_LOGGED_IN",

    setLoggedIn: (value) => ({
        type: actions.SET_LOGGED_IN,
        value: value,
    })
}

export default actions;