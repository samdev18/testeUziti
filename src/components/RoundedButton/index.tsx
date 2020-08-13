import React from 'react';

import './styles.css';

interface roundedButtonProps{
    plus?: boolean
    minus?: boolean
}

const RoundedButton: React.FC<roundedButtonProps> = (props) => {
return (
    <button type="button" className="rounded-button">{props.plus ? '+' : '-'}</button>
);
}
export default  RoundedButton;
