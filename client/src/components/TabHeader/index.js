import React from "react";
import Tab from "./Tab"
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/Bill/action";
import agent from "../../core/api/restful";

const TabBar = ({style}) => {
    const bills = useSelector(state => state.Bill.bills);
    const activating = useSelector(state => state.Bill.activeBill);
    const dispatch = useDispatch();

    const createBill = () => {
        dispatch({type: actions.CREATE_BILL});
    }

    const activeBill = (index) => {
        dispatch({type: actions.ACTIVE_BILL, pos: index});
    }

    const closeBill = (index) => {
        dispatch({type: actions.CLOSE_BILL, pos: index});
    }

    return (
        <div className="d-flex h-100 align-items-center" style={{...style}}>
            {Object.values(bills).map((bill, index) => (
                <Tab key={index} active={index==activating}
                     name={bill.name} data={bill.items}
                     closable={true} onClose={e => closeBill(index)}
                     onClick={e => activeBill(index)}/>
            ))}
            <Tab name={"+"} closable={false} onClick={e => createBill()} style={{width: 50}}/>
        </div>
    )
}

export default TabBar;

