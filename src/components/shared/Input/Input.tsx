import React, { FC , ChangeEvent} from 'react'

export type InputProps = {
    inputType : "text" | "number" | "email" | "password";
    value?: string | number;
    onChange?: (event : ChangeEvent<HTMLInputElement>) => void;
    isDisabled?: boolean;
    placeholder?: string;
    className?: string;
    onFocus?: () => void;
    otherprops?: React.ComponentProps<'input'>;
}


const Input : FC<InputProps> = ({inputType , ...otherprops}) => {
    return (
      <input type={inputType} {...otherprops}/>
    )
  }
  
  export default Input