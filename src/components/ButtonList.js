import Button from "./Button"
import React from 'react';

const ButtonList = ({buttons, handleClick, clearClicks }) => {

return (

    <div>
        <button onClick={clearClicks} >Enable All</button>
    {buttons.map((button, index) => (
    <Button 
    button={button} 
    key={index} handleClick={handleClick} index={index} />
    ))}
   
    </div>

    ); 
};

export default ButtonList
