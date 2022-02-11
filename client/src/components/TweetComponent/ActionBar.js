import React, {useState, useContext} from "react";
import styled from "styled-components";
import { FiHeart, FiShare, FiRepeat, FiMessageCircle} from "react-icons/fi";
import Action from "./Action";
import PoppingCircle from "./PoppingCircle";
import { TweetContext } from "../Context/TweetContext";


const ActionBar = ({isLiked, numLikes, numRetweets})=>{
const {state:{hasLoaded}} = useContext(TweetContext);
    const [like, setLike] = useState(isLiked);
    const [numOfLikes, setNumOfLikes] = useState(numLikes);


    const handleToggleLike = ()=>{
        if(like === false){
        setNumOfLikes(numOfLikes + 1);
        setLike(true);
        }
        if(like === true){
        setNumOfLikes(numOfLikes-1);
        setLike(false);
        }
    }

const styleIcon ={color: "#657786"}
const styleIconLike = {color: "#657786", fill: like? "#EA3D3D" : "transparent", stroke: like? "none" : "#657786"}
return(
<Wrapper>
    <Content>
        <ButtonDiv>
        <ActionButton><FiMessageCircle style={styleIcon}/></ActionButton>
        </ButtonDiv>

        <ButtonDiv>
        <Numbers>{numRetweets}</Numbers>
        <ActionButton><FiRepeat style={styleIcon}/></ActionButton>
        </ButtonDiv>

        <ButtonDiv>
        <Numbers>{numOfLikes}</Numbers >

        
        <Action>
        <ActionButton onClick={handleToggleLike}><FiHeart style={styleIconLike}/>
        {like && <PoppingCircle color="#E790F7"/>}
        </ActionButton>
        </Action>

        </ButtonDiv>

        <ButtonDiv>
        <ActionButton><FiShare style={styleIcon}/></ActionButton>
        </ButtonDiv>
    </Content>
</Wrapper>)
}

const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
margin-top: -10px;
padding-left: 85px;
border-bottom: 1px solid rgb(230, 236, 240);
`
const Content = styled.div`
display: flex;
margin-top: 5px;
`;

const Numbers = styled.p`
color: #657786;
padding-right: 5px;
`

const ButtonDiv = styled.div`
display: flex;
align-items: center;
margin-right: 150px;
`
const ActionButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
border: none;
background-color: transparent;
width: 25px;
height: 25px;

`;

export default ActionBar;