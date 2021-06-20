import React from 'react'
import PropTypes from 'prop-types';
import { Button } from "reactstrap";

export const InvestinButton = ({text, size, disabled}) => {
    return (
        <span className="investin-button-wrapper">
            <Button className="investin-primary-button" size={size} disabled={disabled}>{text}</Button>
        </span>
    )
}


InvestinButton.propTypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
}

InvestinButton.defaultProps = {
    disabled: false,
    size: 'lg',
}