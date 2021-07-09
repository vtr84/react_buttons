import React from 'react';
const Button = ({button, handleClick, index}) => {
    return(
        <>
            <button disabled={button.isClicked}  onClick={() =>{handleClick(index)}}>{button.name}</button>
        </>
    );
}


export default Button;