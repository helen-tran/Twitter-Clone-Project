import React from "react";
import styled from "styled-components";
import { FiHeart, FiShare, FiRepeat, FiMessageCircle} from "react-icons/fi";

const ActionBar = ({isLiked, isRetweeted, numLikes, numRetweets})=>{

const styleIcon = {color: "#657786" , marginRight: "150px"}
return(
<Wrapper>
    <Content>
        <ActionButton><FiMessageCircle style={styleIcon}/></ActionButton>
        
        <ButtonDiv>
        <ActionButton><FiRepeat style={styleIcon}/></ActionButton>
        <Numbers>{numRetweets}</Numbers>
        </ButtonDiv>

        <ButtonDiv>
        <ActionButton><FiHeart style={styleIcon}/></ActionButton>
        <Numbers>{numLikes}</Numbers >
        </ButtonDiv>

        
        <ActionButton><FiShare style={styleIcon}/></ActionButton>
    </Content>
</Wrapper>)
}

const Wrapper = styled.div`
display: flex;
padding-left: 85px;
border-bottom: 1px solid rgb(230, 236, 240);
`
const Content = styled.div`
display: flex;
margin: 10px 0 10px 0;
`;

const Numbers = styled.p`
color: #657786;
`

const ButtonDiv = styled.div`
display:flex;
`
const ActionButton = styled.button`
border: none;
background-color: transparent;
`;

export default ActionBar;