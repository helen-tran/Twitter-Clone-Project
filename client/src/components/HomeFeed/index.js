import React, {useContext, useEffect, useState} from "react";
import { TweetContext } from "../Context/TweetContext";
import TweetFeed from "./TweetFeed";
import ErrorPage from "../ErrorPage";
import CircularLoading from "../CircularLoading";



const HomeFeed = () =>{
const {
    state:{hasLoaded},
    actions: {receiveTweetInfoFromServer}
}= useContext(TweetContext)

const [error, setError] = useState(null);

// fetching data for the feed
const fetchHomeTweets =()=>{
return fetch('/api/me/home-feed',{
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
    .catch(error =>{
    setError(error.message)
    })
}

useEffect(()=>{
fetchHomeTweets()
},[])

if (!receiveTweetInfoFromServer){
    return <div></div>
}

return (
    <div> 
    {error && <ErrorPage/>}
    {hasLoaded ? (
    <TweetFeed fetchHomeTweets={fetchHomeTweets}/>) :(<CircularLoading/>)
}
    </div>
);
}


export default HomeFeed;