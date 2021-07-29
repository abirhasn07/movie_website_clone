import React from 'react'
// styles 
import { Content, Text, Wrapper } from './HeroImages.styled'


const HeroImages = ({image,title,text}) => {
    return (
        <Wrapper image={image}>

            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>
            
        </Wrapper>
    )
}

export default HeroImages
