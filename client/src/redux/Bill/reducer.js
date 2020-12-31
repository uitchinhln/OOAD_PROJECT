import actions from "./action";

const initState = {
    bills: [{
        name: "Hóa đơn 1",
        timeCreated: Date.now(),
        cashed: 0,
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
                cashed: 0,
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
                    cashed: 0,
                    items: []
                });
                state.nextBillId = 2;
            }
            return {bills: bills, activeBill: Math.min(state.activeBill, bills.length-1), nextBillId: state.nextBillId};
        case actions.ACTIVE_BILL:
            return {bills: state.bills, activeBill: Math.min(action.pos, state.bills.length-1), nextBillId: state.nextBillId};
        case actions.ADD_CASH:
            var bills = state.bills.map((bill, index) => {
                if (index === state.activeBill) {
                    return {
                        ...bill,
                        cashed: parseInt(bill.cashed) + parseInt(action.value),
                    }
                }
                return bill;
            });
            return {...state, bills: bills};
        case actions.UPDATE_CASH:
            var bills = state.bills.map((bill, index) => {
                if (index === state.activeBill) {
                    return {
                        ...bill,
                        cashed: parseInt(action.value),
                    }
                }
                return bill;
            });
            return {...state, bills: bills};
        case actions.ADD_BOOK:
            var bills = state.bills.map((bill, index) => {
                if (index === state.activeBill) {
                    return {
                        ...bill,
                        items: [...bill.items, action.value],
                    }
                }
                return bill;
            });
            return {...state, bills: bills};
        default:
            return state;
    }
}
