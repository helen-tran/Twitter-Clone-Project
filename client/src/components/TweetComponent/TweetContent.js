import React, {useContext} from "react";
import { TweetContext } from "../Context/TweetContext";
import styled from "styled-components";
import moment from "moment"
import {Link} from 'react-router-dom';
import {FiRepeat} from "react-icons/fi";


const TweetContent = ({displayName,avatarSrc, handle,timestamp, tweetMedia, status, idUser, retweetFrom}) => {

const formattedDate = moment(timestamp).format('MMM Do');
const styleIcon = {color: "#657786", marginRight:"10px"}

const targetDisplayName = (e)=>{
e.target.style.color = "red";
}

return (
<>
    {retweetFrom &&(
    <RetweetFrom>
    <FiRepeat style={styleIcon}/>
    {retweetFrom.displayName} Remeowed
    </RetweetFrom>
    )}

    <Wrapper>
    <Avatar src={avatarSrc} />
    <WrapperContent>

        <Header>
        <StyledLink key={idUser}
        to={`/${handle}`}
        OnMouseOver={targetDisplayName}>
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
    </>
);
};

const Wrapper = styled.div`
display: flex;
margin-left: 20px;
padding-top: 15px;
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
font-weight: bold;
&:hover {
    text-decoration:underline;
}
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
padding-bottom: -100px;
`
const Status = styled.p`
margin-top: 5px;
margin-bottom: -8px;
font-size: 15px;
text-ali
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

const RetweetFrom = styled.div`
display: flex;
margin-top: 15px;
padding-left: 60px;
color: rgb(101, 119, 134);
font-size: 13px;
`;

export default TweetContent;
