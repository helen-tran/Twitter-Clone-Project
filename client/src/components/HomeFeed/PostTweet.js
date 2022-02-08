import React, {useContext, useState} from "react";
import styled from "styled-components";
import {CurrentUserContext} from "../CurrentUserContext"
import { COLORS } from "../constants";

const PostTweet = ()=>{
    const{profileInfoFromServer} = useContext(CurrentUserContext);

    const [text, setText] = useState("");
    const [characterRemain, setCharacterRemain] = useState(280);
    const [disableButton, setDisableButton] = useState(true);

    const profile = profileInfoFromServer.profile;
    const avatarSrc = profile.avatarSrc;

    // count down typing
    const handleChange = (e)=>{
        let input = e.target.value;
        setText(input);
        setCharacterRemain(280 - (input.length));
    }

console.log(characterRemain)

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
            // disabled={!text}
            disabled= {text.length < 1 || characterRemain < 0}
            >Meow</PostButton>
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
    opacity: 0.3;
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
export default PostTweet;