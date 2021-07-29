import React from 'react';
import { Wrapper } from './Button.styled';

const Button = ({text,callback}) => {
    console.log(text);
    return (
        <Wrapper type="button" onClick={callback}>
            {text}
        </Wrapper>
    )
}

export default Button
