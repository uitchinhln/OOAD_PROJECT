import React from "react";
import TabWrapper from "./TabHeader.style";
import {CloseOutlined} from "@ant-design/icons";

const Tab = ({active, billData, name, closable, onClick, style, onClose}) => {

    return (
        <TabWrapper className={(active ? "active" : "")} style={{...style}}>
            {name}
            {closable ? (<span className="ooad-close-button" onClick={onClose}><CloseOutlined /></span>) : ""}
        </TabWrapper>
    )
}

export default Tab;

