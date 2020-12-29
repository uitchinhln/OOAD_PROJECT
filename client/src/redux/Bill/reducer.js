import actions from "./action";

const initState = {
    bills: [{
        name: "Hóa đơn 1",
        items: []
    }],
    activeBill: 0
}


export default function authReducer(state = initState, action) {
    switch (action.type) {
        case actions.CREATE_BILL:
            state.bills.push({
                name: "Hóa đơn 2",
                items: []
            })
            state.activeBill = state.bills.length-1;
            return state;
        case actions.CLOSE_BILL:
            if (state.bills.length > 1) {
                state.bills.splice(action.pos, 1);

                if (state.activeBill >= state.bills.length) {
                    state.activeBill = state.bills.length-1;
                }

                console.log(state.bills);
                console.log(state.activeBill);
            }
            return state;
        case actions.ACTIVE_BILL:
            state.activeBill = action.pos;
            return {...state};
        default:
            return state;
    }
}
