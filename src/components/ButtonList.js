import Button from "./Button"
import React from 'react';
import ButtonListDiv from "./styled/ButtonList";

const ButtonList = ({buttons, handleClick, clearClicks }) => {

return (
    <ButtonListDiv>
        <button onClick={clearClicks} >Enable All</button>
    {buttons.map((button, index) => (
    <Button 
    button={button} 
    key={index} handleClick={handleClick} index={index} />
    ))}
    </ButtonListDiv>

    ); 
};

export default ButtonList
