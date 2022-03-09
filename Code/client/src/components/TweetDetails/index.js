import React, {useEffect} from "react";
import { useParams, Link} from "react-router-dom";
import ActionBar from "../TweetComponent/ActionBar";
import styled from "styled-components";
import {FiArrowLeft} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import ErrorPage from "../ErrorPage"; 
import CircularLoading from "../CircularLoading";

const TweetDetails = () =>{
const {tweetId} = useParams();

const [error, setError] = React.useState(null);
const [tweetHasLoaded, setTweetHasLoaded] = React.useState(false);
const [tweetFromServer, setTweetFromServer] = React.useState(null);

useEffect(()=>{
    fetch(`/api/tweet/${tweetId}`,{
        headers:{
            'Accept': 'application.json'
        }
    })
    .then(res =>{
        if (!res.ok){
            setError(error.message);
        }
        return res.json()
    })
    .then(data =>{
        setTweetFromServer(data);
        setTweetHasLoaded(true);
    })
    .catch(error =>{
        setError(error.message)
        })
},[]);

console.log(tweetFromServer)

const navigate = useNavigate();

if (!tweetFromServer){
        return <div><CircularLoading/></div>
    }

        const tweet = tweetFromServer.tweet;

        const displayName = tweet.author.displayName;
        const avatarSrc = tweet.author.avatarSrc;
        const handle = tweet.author.handle;
        const timestamp = tweet.timestamp;
        const status = tweet.status;
        const tweetMedia = tweet.media[0]
        const idUser = tweet.id;
        const numLikes = tweet.numLikes;
        const isLiked = tweet.isLiked;
        const formattedDate = moment(timestamp).format(' h:mm a · MMM Do YYYY');
        const numRetweets=tweet.numRetweets;
    return(
        <>
        {error && <ErrorPage/>}
        {tweetHasLoaded && (
        <Wrapper>
            <HeaderWrapper>
            <BackButton onClick={() => navigate(-1)}>
                <FiArrowLeft style={{marginLeft: "20px"}}/>
            </BackButton>
            <PageName>Meow</PageName>
            </HeaderWrapper>

            
            <WrapperTweet>
            <Avatar src={avatarSrc} />
            <WrapperContent>

            <Header>
            <StyledLink key={idUser} to={`/${handle}`}>
            <DisplayName>{displayName}</DisplayName>
            </StyledLink>
            <Username>@{handle}</Username>
            </Header>

            <Content>
            <Status>{status}</Status>
            
            { tweetMedia &&
            (<Media src={tweetMedia.url}/>)
        }
            </Content>
            <Timestamp>{formattedDate} · Critter web app</Timestamp>
            </WrapperContent>
            </WrapperTweet>

            <ActionBar
            numLikes={numLikes}
            isLiked={isLiked}
            numRetweets={numRetweets}
            />
        </Wrapper>
    )}</>
    )
}

const Wrapper = styled.div`
    width: 1000px;
    border-left: 1px solid rgb(230, 236, 240);
    border-right: 1px solid rgb(230, 236, 240);
    margin-right: 20px;
`;

const PageName = styled.div`
padding: 15px 0 15px 20px;
font-weight: bold;
color: black;
font-size: 22px;
`;

const HeaderWrapper = styled.div`
display: flex;
align-items:center;
border-bottom: 1px solid rgb(230, 236, 240);
`;

const BackButton = styled.button`
border: none;
background: transparent;
width: 40px;
`;

const WrapperTweet = styled.div`
display: flex;
padding-left: 20px;
padding-top: 15px;
border-bottom: 1px solid rgb(230, 236, 240);
margin-bottom: 8px;
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
font-size: 14px;
padding-top: 10px;
padding-bottom: 10px;
`;

const Header = styled.div`
display:flex;
flex-direction: row;
align-content: center;
width: 100%;
`

const Content = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
padding-bottom: -100px;
`
const Status = styled.p`
margin-top: 5px;
font-size: 15px;
margin-bottom: 0px;
`
const Media = styled.img`   
width: 95%;
margin-top: 15px;
margin-bottom: 10px;
border-radius: 10px;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
`;


export default TweetDetails;