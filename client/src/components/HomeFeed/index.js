import React, {useContext, useEffect} from "react";
import { TweetContext } from "../TweetContext";
import TweetFeed from "./TweetFeed";
import PostTweet from "./PostTweet";

const HomeFeed = () =>{
const {
    state,
    actions: {receiveTweetInfoFromServer, loadingState, loadedState}
}= useContext(TweetContext)


// fetching data for the feed
useEffect(()=>{
    loadingState();

    fetch('/api/me/home-feed',{
        headers:{
            'Accept': 'application.json'
        }
    })
    .then(res =>{
        return res.json()
    })
    .then(data =>{
        receiveTweetInfoFromServer(data);
    })
    .then(()=>{
        loadedState();
    })

    },[]);

return (
    <div> 
    <TweetFeed />
    </div>
);

}

export default HomeFeed;