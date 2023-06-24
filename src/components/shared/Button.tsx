import React from 'react';
import { FC } from 'react'

type ButtonProps  = {
    children : React.ReactNode;
    version?: 'primary' | 'secondary';
    type : "button" | "submit" | "reset" | undefined;
    isDisabled: boolean;
    className?: string;

} 

const Button : FC<ButtonProps> = ({children , version , type , isDisabled}) => {
    return (
        <button className={`btn btn-${version}`} type={type} disabled = {isDisabled}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    version : 'primary',
    type : 'button',
    isDisabled : false,
}

export default Button;
