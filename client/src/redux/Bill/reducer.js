import actions from "./action";

const initState = {
    bills: [{
        name: "Hóa đơn 1",
        timeCreated: Date.now(),
        items: []
    }],
    activeBill: 0,
    nextBillId: 2
}


export default function authReducer(state = initState, action) {
    switch (action.type) {
        case actions.CREATE_BILL:
            var bills = [...state.bills];
            bills.push({
                name: "Hóa đơn " + state.nextBillId,
                timeCreated: Date.now(),
                items: []
            });
            return {bills: bills, activeBill: bills.length -1, nextBillId: state.nextBillId+1};
        case actions.CLOSE_BILL:
            var bills = [...state.bills];
            bills.splice(action.pos, 1);
            if (bills.length < 1) {
                bills.push({
                    name: "Hóa đơn 1",
                    timeCreated: Date.now(),
                    items: []
                });
                state.nextBillId = 2;
            }
            return {bills: bills, activeBill: Math.min(state.activeBill, bills.length-1), nextBillId: state.nextBillId};
        case actions.ACTIVE_BILL:
            return {bills: state.bills, activeBill: Math.min(action.pos, state.bills.length-1), nextBillId: state.nextBillId};
        default:
            return state;
    }
}
