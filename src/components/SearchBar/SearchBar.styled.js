import styled from "styled-components";

export const Wrapper = styled.div`

display: flex;
align-items: center;
background: var(--darkGrey);
height: 100px;
padding:0 20px;

`
export const Content = styled.div`

height: 55px;
background: var(--medGrey);
border-radius: 45px;
max-width: var(--maxWidth);
position: relative;
width: 100%;
margin: 0 auto;

img{
    left: 15px;
    top: 14px;
    width: 30px;
    position: absolute;
}

input{
    font-size: 28px;
    position: absolute;
    right: 0;
    width: 95%;
    margin: 8px 0;
    padding: 0 0 0 60px;
    background: transparent;
    border: transparent;
    border-radius: 40px;
    outline: transparent;
    color: var(--white);

}

`