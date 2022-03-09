import React from "react";
import styled, { keyframes } from "styled-components";

const scale = keyframes`
from {
    transform: scale(0);
}
to {
    transform: scale(1.25);
}
`;

const fade = keyframes`
from {
    opacity: 1
}
to {
    opacity: 0;
}
`;

const PoppingCircle = ({color}) =>{
    return <Wrapper color={color}></Wrapper>;
};

const Wrapper = styled.div`
position: absolute;
animation: ${scale} 300ms forwards, ${fade} 500ms forwards;
height: 100%;
width: 100%;
border-radius: 100%;
background-color: #E790F7;
`;

export default PoppingCircle;