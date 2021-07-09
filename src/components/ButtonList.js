import Button from "./Button"
import React from 'react';

const ButtonList = ({buttons, handleClick}) => {

return (

    <div>
    {buttons.map((button, index) => (
    <Button 
    button={button} 
    key={index} handleClick={handleClick} index={index} />
    ))}
   
    </div>

    ); 
};

export default ButtonList
