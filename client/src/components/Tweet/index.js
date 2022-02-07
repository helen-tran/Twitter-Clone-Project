import React, {useContext} from "react";
import { TweetContext } from "../TweetContext";
import styled from "styled-components";
import TweetContent from "./TweetContent";
import ActionBar from "./ActionBar";

const Tweet = () =>{
    const{state:{tweetIds,tweetsById, hasLoaded}} = useContext(TweetContext);

    // console.log("hasLoaded", hasLoaded)

    return (
    <Wrapper>
        {hasLoaded &&(<>
        {tweetIds.map(id=>{
        const tweet = tweetsById[id];
        console.log(tweetsById)
        
        // content for tweets
        const displayName = tweet.author.displayName;
        const tweetMedia = tweet.media[0];
        const handle = tweet.author.handle; 
        const avatarSrc = tweet.author.avatarSrc;
        const status = tweet.status;
        const timestamp = tweet.timestamp;

        // action bar
        const isLiked = tweet.isLiked;
        const isRetweeted = tweet.isRetweeted;
        const numLikes = tweet.numLikes;
        const numRetweets = tweet.numRetweets;
        
        return(
            <div>
            <TweetContent
            displayName={displayName}
            handle= {handle}
            avatarSrc={avatarSrc}
            timestamp={timestamp}
            tweetMedia={tweetMedia}
            status={status}
            />
            <ActionBar
            isLiked={isLiked}
            isRetweeted={isRetweeted}
            numLikes={numLikes}
            numRetweets={numRetweets}
            />
            </div>
        )
        })}
    </>)}
    </Wrapper>
    
    )
    
    };
    
    
    const Wrapper = styled.div`
    width: 1000px;
    border-left: 1px solid rgb(230, 236, 240);
    border-right: 1px solid rgb(230, 236, 240);
    margin-right: 20px;
    `;
    

export default Tweet;