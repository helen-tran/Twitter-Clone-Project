import React from "react";
import styled from "styled-components";

const Action = ({children})=>{
    const [isHovered, setIsHovered] = React.useState(false);

    return(
        <Wrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
        background: isHovered? "#FFB0B0" : "transparent",
        borderRadius: "30px",
        }}
        >
        {children}
        </Wrapper>

    )
    }
    const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    `;


export default Action; 