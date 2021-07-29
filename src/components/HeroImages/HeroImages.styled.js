import styled from "styled-components";

export const Wrapper=styled.div`

background: linear-gradient(

    rgba(0,0,0,0) 49%,rgba(0,0,0,0.65) 100% );
    background-image: url(${props=>props.image});
    background-size: 100% cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animateHeroImage 1s;
    background-repeat: no-repeat;
    
   

@keyframes animateHeroImage{
 0%{opacity:0;

 }
 100%{
     opacity: 1;
 }
}

`;


export const Content=styled.div`
padding: 20px ;
max-width: var(--maxWidth);
margin: 0 auto;

`;




export const Text=styled.div`
z-index: 100;
max-width: 700px;
min-width: 100px;
color: var(--white);
position: absolute;
bottom: 40px;
margin-left: 20px;

h1{
    font-size: var(--fontTitle);

    @media (max-width:768px){
        font-size:var(--fontLarge) ;
    }
}


p{
    font-size: var(--fontMedium);
@media (max-width:768px){

    font-size: var(--fontSmall);
}

}


`;