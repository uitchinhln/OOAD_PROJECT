import actions from "./action";
import "./BillClasses";
import {BuyReceipt, HireReceipt, ImportReceipt, ReceiptType, ReturnReceipt} from "./BillClasses";

const initState = {
    bills: [new BuyReceipt(1, 0)],
    activeBill: 0,
    nextBillId: 2
}

export default function authReducer(state = initState, action) {
    let bills;
    let employeeId = action.employeeId ? action.employeeId : 0;
    switch (action.type) {
        case actions.CREATE_BILL:
            bills = [...state.bills];
            switch (action.billType ? action.billType : 0) {
                case ReceiptType.BUY:
                    bills.push(new BuyReceipt(state.nextBillId, employeeId));
                    break;
                case ReceiptType.HIRE:
                    bills.push(new HireReceipt(state.nextBillId, employeeId));
                    break;
                case ReceiptType.IMPORT:
                    bills.push(new ImportReceipt(state.nextBillId, employeeId));
                    break;
                case ReceiptType.RETURN:
                    bills.push(new ReturnReceipt(state.nextBillId, employeeId));
                    break;
            }
            return {bills: bills, activeBill: bills.length -1, nextBillId: state.nextBillId+1};

        case actions.CLOSE_BILL:
            bills = [...state.bills];
            bills.splice(action.pos, 1);
            if (bills.length < 1) {
                bills.push(new BuyReceipt(1, employeeId));
                state.nextBillId = 2;
            }
            return {bills: bills, activeBill: Math.min(state.activeBill, bills.length-1), nextBillId: state.nextBillId};

        case actions.ACTIVE_BILL:
            return {bills: state.bills, activeBill: Math.min(action.pos, state.bills.length-1), nextBillId: state.nextBillId};

        case actions.UPDATE_BILL_PROP:
            bills = state.bills.map((bill, index) => {
                if (index == state.activeBill) {
                    Object.entries(action.value).map(([key, value], index) => {
                        bill[key] = value;
                    })
                }
                return bill;
            })
            return {...state, bills: bills}
        default:
            return state;
    }
}
