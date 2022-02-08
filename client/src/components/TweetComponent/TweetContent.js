import React, {useContext} from "react";
import { TweetContext } from "../TweetContext";
import styled from "styled-components";
import moment from "moment"
import {Link} from 'react-router-dom';
import {FiRepeat} from "react-icons/fi";


const TweetContent = ({displayName,avatarSrc, handle,timestamp, tweetMedia, status, idUser}) => {

const{state:{hasLoaded}} = useContext(TweetContext);
const formattedDate = moment(timestamp).format('MMM Do');
const styleIcon = {color: "#657786"}

return (
<>
    {/* {retweetFrom &&(
    <RetweetFrom>
    <FiRepeat style={styleIcon}/>
    {retweetFrom}
    </RetweetFrom>
    )} */}

    <Wrapper>
    <Avatar src={avatarSrc} />
    <WrapperContent>

        <Header>
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
    </>
);
};

const Wrapper = styled.div`
display: flex;
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
align-content: center;
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
margin:0;
margin-left: 20px;
`;

export default TweetContent;
