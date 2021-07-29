import styled from "styled-components";


export const LoadingSpinner= styled.div`

height: 50px;
width: 50px;
border-radius: 50%;
border: 5px solid var(--lightGrey);
border-top: 5px solid var(--medGrey);
margin: 20px auto;
animation: spin 0.8s linear infinite;

@keyframes spin{


    0%{
        transform: rotate(0deg);
    }

    100%{
        transform: rotate(360deg);
    }
}

`