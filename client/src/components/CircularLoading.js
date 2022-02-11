import React from "react";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";


const CircularLoading = ()=>{
const style = {
    color: "grey",
    top: "50%",
    marginLeft: "500px",
    transform: "translate(-50%, -50%)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

    return (
        <Wrapper>
            <CircularProgress style={style}/>
        </Wrapper>
    )
}        

const Wrapper = styled.div`
display: flex;
align-items:center;
justify-items: center;
margin: auto;
margin-right: 20px;
`;

export default CircularLoading;