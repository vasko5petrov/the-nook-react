import React, { useState } from "react";
import classnames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import style from './styles/Dropdown.scss';

function Dropdown({ className, children }) {
    const [isToggleOpen, changeToggleState] = useState(false);
    const toggle = () => changeToggleState(!isToggleOpen);
    Dropdown.handleClickOutside = () => changeToggleState(false);

    const dropdownStyle = classnames(style.dropdown, className);
    const childrenWithProps = React.Children.map(children, ((child, index) => {
        switch (index) {
            case 0:
                return React.cloneElement(child, {changeToggleState: toggle, key: index});
            case 1:
                return React.cloneElement(
                    child, {
                        isToggleOpen,
                        changeToggleState: toggle,
                        key: index
                    }
                );
            default:
                return child;
        }
    }));

    return (
        <div className={dropdownStyle}>
            {childrenWithProps}
        </div>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside
};

export default onClickOutside(Dropdown, clickOutsideConfig);

export const Toggle = ({ className, changeToggleState, children }) => {
    const dropdownToggleStyle = classnames(style.toggle, className);
    return (
        <div className={dropdownToggleStyle} onClick={changeToggleState}>{children}</div>
    );
}

export const Menu = ({ className, changeToggleState, isToggleOpen, children }) => {
    const dropdownMenuStyle = classnames(style.dropdownMenu, className, {[style.active]: isToggleOpen});
    return (
        <div>
            <div className={dropdownMenuStyle} onClick={changeToggleState}>{children}</div>
        </div>
    );
}

export const MenuItem = ({ className, onClick, children }) => (
    <div onClick={onClick} className={classnames(style.dropdownMenuItem, className)}>{children}</div>
);