import React from 'react'
import { Content, Wrapper } from './CardContainer.styled'
const CardContainer = ({header,children}) => {
    return (
        <Wrapper>
         <h1>{header}</h1>
            <Content>
                {children}
            </Content>
        </Wrapper>
    )
}

export default CardContainer
