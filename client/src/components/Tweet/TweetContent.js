import React from "react";
import styled from "styled-components";
import moment from "moment"

const TweetContent = ({displayName,avatarSrc, handle,timestamp, tweetMedia, status}) => {
const formattedDate = moment(timestamp).format('MMM Do');

return (
    <Wrapper>
    <Avatar src={avatarSrc} />
    <WrapperContent>

        <Header>
        <DisplayName>{displayName}</DisplayName>
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
border-radius: 10px;
`;

export default TweetContent;
