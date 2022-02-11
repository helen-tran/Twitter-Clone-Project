import React, {useContext, useState} from "react";
import styled from "styled-components";
import {CurrentUserContext} from "../Context/CurrentUserContext"
import { COLORS } from "../constants";
import { CircularProgress } from "@mui/material";
const PostTweet = ({fetchHomeTweets})=>{
    const{profileInfoFromServer, status} = useContext(CurrentUserContext);

    const [text, setText] = useState("");
    const [characterRemain, setCharacterRemain] = useState(280);
    const [fetching, setFetching] = React.useState(false);
    const profile = profileInfoFromServer.profile;
    const avatarSrc = profile.avatarSrc;

    // count down typing
    const handleChange = (e)=>{
        let input = e.target.value;
        setText(input);
        setCharacterRemain(280 - (input.length));
    }

    if (status === "loading"){
        return(
            <Container>
                <CircularProgress/>
            </Container>
        )
    }

    const postingTweet =() =>{
        const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ status: text }),
        };
    
        setFetching(true);
        fetch("api/tweet", requestOptions)
        .then((_res) => {
            return fetchHomeTweets();
        })            

        .then(() => {
            setFetching(false);
            setText("");
        })
    }

    const progressStyle = {color: "grey", }
return(

    <Wrapper>

        <ContentWrapper>
            <Avatar src={avatarSrc}/>
            <TextArea
            type="text"
            placeholder="What's happening?"
            onChange={handleChange}
            value = {text}
            />
        </ContentWrapper>
    
        <SubmitWrapper>
            <CharacterCount>{characterRemain}</CharacterCount>
            <PostButton
            type="submit"
            value = {text}
            disabled= {text.length < 1 || characterRemain < 0}
            onClick={postingTweet}
            style={{backgroundColor: fetching? "#C9B2FF" : null }}
            >
            {fetching ? 
            (<CircularProgress style={progressStyle}/>):
            (<p>Meow</p>)}
            </PostButton>
        </SubmitWrapper>
    </Wrapper>
    )
}

const Wrapper = styled.div`
border-bottom: 8px solid #E8E8E8;
height: 230px;
`;

const ContentWrapper = styled.div`
display: flex;
`;

const Avatar = styled.img`
margin: 20px 0 0 20px;
width: 48px;
height: 48px;
border-radius: 50%;
`;

const TextArea = styled.textarea`
padding-top:32px;
font-size: 18px;
margin-left: 30px;
height: 160px;
width: 800px;
border: none;
resize: none;

&:focus{
    outline: none;
}
`;

const PostButton = styled.button`
float: right;
margin-right: 10px;
height: 40px;
width: 70px;;
background-color: ${COLORS.primary};
color: white;
font-weight: bold;
border: none;
border-radius: 100px;

&:disabled{
    background: #C9B2FF;
}
`;

const CharacterCount = styled.p`
margin-right: 20px;
color: #E8E8E8;
`;

const SubmitWrapper = styled.div`
display: flex;
align-items: center;
float: right;
`;

const Container = styled.div`
height: 100vh;
display: flex;
align-items:center;
justify-content:center;
`

export default PostTweet;