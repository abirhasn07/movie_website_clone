import styled from "styled-components";


export const IMG=styled.img`

width: 100%;
max-width: 720px;
transition: all 0.3s ;
border-radius: 20px;
object-fit: cover;
animation: fade-up 2s;
cursor: pointer;

:hover{
opacity: 0.8;

}



@keyframes fade-up{

0%{
    opacity: 0;
}
100%{
    opacity: 1;
}
}
`