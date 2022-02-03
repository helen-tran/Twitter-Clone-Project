import React from "react";
import styled from "styled-components";
import { COLORS } from "./constants";

const HoverPages = ({children})=>{
const [isHovered, setIsHovered] = React.useState(false);
return (
    <Wrapper
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    style={{
    color: isHovered ? "hsl(258deg, 100%, 50%)" : "black",
    background: isHovered? "#C9B2FF" : "transparent",
    borderRadius: "30px",
    padding: "0px 15px 0px 15px"
  }}
    >
    {children}
    </Wrapper>
);
}

const Wrapper = styled.button`
font-weight: bold;
position: relative;
display: flex;
justify-content: center;
align-items: center;
border: none;
height: 40px;
font-size: 20px;
margin: 5px 0 5px 0;

/* &.active {
    color: ${COLORS.primary};
} */
`

export default HoverPages;