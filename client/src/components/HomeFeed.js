import React, {useContext, useEffect} from "react";
import { TweetContext } from "./TweetContext";
import Tweet from "./Tweet";

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
        console.log(state.hasLoaded);
        receiveTweetInfoFromServer(data);
    })
.then(()=>{
    loadedState();
})

    },[]);

return (
    <div> 
    <Tweet />
    </div>
);
}

export default HomeFeed;