import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { TweetContext } from "../TweetContext";
import ActionBar from "../TweetComponent/ActionBar";
import TweetContent from "../TweetComponent/TweetContent";
import styled from "styled-components";


const TweetDetails = () =>{
    const{state:{tweetsById, hasLoaded}} = useContext(TweetContext);
    const {tweetId} = useParams();
    const tweetDetail = tweetsById[tweetId];

    console.log(tweetDetail);
    const displayName = tweetDetail.author.displayName;
    const avatarSrc = tweetDetail.author.avatarSrc;
    const handle = tweetDetail.author.handle;
    const timestamp = tweetDetail.timestamp;
    const status = tweetDetail.status;
    const tweetMedia = tweetDetail.media[0]
    const idUser = tweetDetail.id;

    return(
        <Wrapper>
            <PageName>Meow</PageName>
            <TweetContent
            displayName={displayName}
            avatarSrc={avatarSrc}
            handle={handle}
            timestamp={timestamp}
            tweetMedia={tweetMedia}
            status={status}
            idUser={idUser}
            />
            <ActionBar
            />
        </Wrapper>
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
border-bottom: 1px solid rgb(230, 236, 240);
`;
export default TweetDetails;