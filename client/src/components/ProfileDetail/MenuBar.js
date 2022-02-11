import React from "react";
import styled from "styled-components";
import {COLORS} from "../constants"

const MenuBar = ()=>{
    return (
    <Wrapper>
            <PurpleLine>
            <LiTweet>Tweets</LiTweet>
            </PurpleLine>
            
            <GreyLine>
            <Li>Media</Li>
            </GreyLine>
            <GreyLine>
            <Li>Likes</Li>
            </GreyLine>
    </Wrapper>
    )
}

const Wrapper = styled.div`
margin-top: 40px;
display: flex;
margin-bottom: 25px;
;`

const PurpleLine = styled.div`
width: 333px;
border-bottom: 2px solid ${COLORS.primary};
`;

const LiTweet = styled.li`
color: ${COLORS.primary};
text-align: center;
font-weight: bold;
display: flex;
flex-direction: row;
justify-content: center;
padding-bottom: 8px;
`;

const GreyLine = styled.div`
width: 333px;
border-bottom: 1px solid grey;
`;

const Li = styled.li`
text-align: center;
display: flex;
flex-direction: row;
justify-content: center;
color: grey;
padding-bottom: 8px;
`;

export default MenuBar;