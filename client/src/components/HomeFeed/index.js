import React, {useContext, useEffect, useState} from "react";
import { TweetContext } from "../Context/TweetContext";
import TweetFeed from "./TweetFeed";
import ErrorPage from "../ErrorPage";
import CircularLoading from "../CircularLoading";



const HomeFeed = () =>{
const {
    state:{hasLoaded},
    actions: {receiveTweetInfoFromServer, loadingState, loadedState}
}= useContext(TweetContext)

const [error, setError] = useState(null);

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
    .catch(error =>{
    setError(error.message)
    })

    },[]);

if (!receiveTweetInfoFromServer){
    return <div></div>
}

return (
    <div> 
    {error && <ErrorPage/>}
    {hasLoaded ? (
    <TweetFeed />) :(<CircularLoading/>)
}
    </div>
);
}


export default HomeFeed;