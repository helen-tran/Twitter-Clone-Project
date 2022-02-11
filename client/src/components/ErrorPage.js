import React from "react";
import styled from "styled-components";
import { FaBomb } from "react-icons/fa";

const ErrorPage = ()=>{
    const style={
        fontSize:"30px"
    }
    return(
        <Wrapper>
            <FaBomb style={style}/>
            <Title>An unknown error has occurred.</Title>
            <Text>Please try refreshing the page, or contact support if the problem persists.</Text>
        </Wrapper>
)

}
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 1000px;
height: 100vh;
border-left: 1px solid rgb(230, 236, 240);
border-right: 1px solid rgb(230, 236, 240);
margin-right: 20px;
`;

const Title = styled.h2`
font-weight: bold;
`;

const Text = styled.p`

`;

export default ErrorPage;