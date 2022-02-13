import moment from "moment";
import React,{useContext} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ActionBar from "../TweetComponent/ActionBar";
import {FiRepeat} from "react-icons/fi";
import { TweetContext } from "../Context/TweetContext";


const TweetsFromUser = ({avatarSrc, displayName, handle, numLikes, isLiked, numRetweets,timestamp,idUser,status, tweetMedia, retweetFrom})=>{
const {state:{tweetsById}}=useContext(TweetContext);

// output own tweets

const formattedDate = moment(timestamp).format('MMM Do');

const styleIcon = {color: "#657786", marginRight:"10px"}

return (
    <>
    <Wrapper>

    <WrapperContent>
        {retweetFrom &&(
        <RetweetFrom>
        <FiRepeat style={styleIcon}/>
        {retweetFrom.displayName} Remeowed
        </RetweetFrom>
        )}
        <Header>
            <Avatar src={avatarSrc} />
            <StyledLink key={idUser} to={`/${idUser}`}>
                <DisplayName>{displayName}</DisplayName>
            </StyledLink>
            <Username>@{handle}</Username>
            <Timestamp>{formattedDate}</Timestamp>
        </Header>

        <Content>
        <Status>{status}</Status>
        { tweetMedia &&
        (<Media src={tweetMedia.url}/>)
        }
        </Content>
    </WrapperContent>
    </Wrapper>
    <ActionBar
    numLikes={numLikes}
    isLiked={isLiked}
    numRetweets={numRetweets}
    />
    </>
);
};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
padding-top:20px;
`;

const Avatar = styled.img`
width: 48px;
height: 48px;
border-radius: 50%;
`;

const WrapperContent = styled.div`
padding: 0px 16px;
`;

const DisplayName = styled.div`
font-size: 15px;
padding-left: 10px;
font-weight: bold;
`;

const Username = styled.div`
font-size: 15px;
color: rgb(101, 119, 134);
padding-left: 8px;
`;

const Timestamp = styled.div`
color: rgb(101, 119, 134);
font-size: 15px;
padding-left: 8px;
`;

const Header = styled.div`
display:flex;
flex-direction: row;
width: 100%;
`

const Content = styled.div`
display: flex;
flex-direction:column;
margin-top: -25px;
padding-bottom: -100px;
`
const Status = styled.p`
padding-left: 60px;
margin-top: 5px;
margin-bottom: -8px;
font-size: 15px;
`
const Media = styled.img`   
width: 95%;
margin-top: 25px;
margin-bottom: 10px;
border-radius: 10px;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
`;

const RetweetWrapper = styled.div`
display: flex;
padding-left: 40px;
padding-bottom: 20px;
color: rgb(101, 119, 134);
font-size: 13px;
`;

const RetweetFrom = styled.div`
display: flex;
margin-top: 15px;
padding-left: 60px;
color: rgb(101, 119, 134);
font-size: 13px;
`;

export default TweetsFromUser;