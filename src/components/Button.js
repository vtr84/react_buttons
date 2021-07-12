import React from 'react';
import Button from './styled/Button'


const ButtonClick = ({button, handleClick, index}) => {
    return(
        <>
            <Button disabled={button.isClicked}  onClick={() =>{handleClick(index)}}index={index} >{button.name}</Button>
        </>
    );
}


export default ButtonClick;