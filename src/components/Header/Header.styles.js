import styled from 'styled-components';


export const Wrapper = styled.div`
background: var(--darkGrey);
padding: 0 20px;
`;


export const Content=styled.div`

display: flex;
justify-content: space-between;
align-items: center;
max-width: var(--maxWidth);
margin: 0 auto;
padding: 20px 0;


`


export const LogoImg =styled.img`
width: 200px;

@media(max-width:500px){
    width: 150px;
}
`

export const TMDBLogoImg =styled.img`
width:120px;
@media(max-width:500px){
    width: 80px;
}

`


