import React from "react";
import { Input, Tooltip } from 'antd';
import {formatNumber} from "../../utils/number";

export default class NumericInput extends React.Component {
    onChange = e => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if (isNaN(value)) {
            if (this.props.onChange) {
                this.props.onChange(0);
            }
            return;
        }
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            if (this.props.onChange) {
                this.props.onChange(value);
            }
        }
    };

    // '.' at the end or only '-' in the input box.
    onBlur = () => {
        const { value, onBlur, onChange } = this.props;
        let valueTemp = value.toString();
        if (value.toString().charAt(value.length - 1) === '.' || value.toString() === '-') {
            valueTemp = value.toString().slice(0, -1);
        }
        if (onChange) {
            onChange(valueTemp.replace(/0*(\d+)/, '$1'));
        }
        if (onBlur) {
            onBlur();
        }
    };

    render() {
        const { value } = this.props;
        const title = value ? (
            <span className="numeric-input-title">{value !== '-' ? formatNumber(value) : '-'}</span>
        ) : (
            'Nhập số tiền khách đưa'
        );
        return (
            <Tooltip
                trigger={['focus']}
                title={title}
                placement="topLeft"
                overlayClassName="numeric-input"
            >
                <Input
                    {...this.props}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    placeholder="Nhập số tiền khách đưa"
                    maxLength={25}
                />
            </Tooltip>
        );
    }
}
