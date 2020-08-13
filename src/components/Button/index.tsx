import React, {ButtonHTMLAttributes} from 'react';

import './styles.css';

interface  ButtonProps extends ButtonHTMLAttributes<HTMLInputElement>{
    text:string,
    id:string
}

const Button: React.FC<ButtonProps> = (props, ...rest) => {
    return (
    <button type="button" id={props.id} {...rest}>
        {props.text}
    </button>
    );
}
export default Button;
