import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import MenuBar from "./MenuBar";
import TweetsFromUser from "./TweetFromUser";
import ErrorPage from "../ErrorPage"
import CircularLoading from "../CircularLoading";


const ProfileDetail = ()=>{
    const {handle} = useParams();
    const [error, setError] = useState(null);
    const [profileTweetHasLoaded, setProfileTweetHasLoaded] = React.useState(false);
    const [profileTweetFromServer, setProfileTweetFromServer] = React.useState(null);
    useEffect(()=>{
        fetch(`/api/${handle}/feed`,{
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
            setProfileTweetHasLoaded(true);
            setProfileTweetFromServer(data);
        })
        .catch(error =>{
            setError(error.message)
            })
    },[]);
    

        
        const [profileHasLoaded, setProfileHasLoaded] = React.useState(false);
        const [profileFromServer, setProfileFromServer] = React.useState(null);
        useEffect(()=>{
            fetch(`/api/${handle}/profile`,{
                headers:{
                    'Accept': 'application.json'
                }
            })
            .then(res =>{
                return res.json()
                setError(error.message);
            })
            .then(data =>{
                setProfileHasLoaded(true);
                setProfileFromServer(data);
            })
            .catch(error =>{
                setError(error.message)
                })
        },[]);
        
        // Setting This so it doesn't break my
        if (!profileFromServer || !profileTweetHasLoaded){
            return <div><CircularLoading/></div>
        }
        
        const tweetIds = profileTweetFromServer.tweetIds;
        const tweetById = profileTweetFromServer.tweetsById;

    // profile info
    const profile = profileFromServer.profile;
    const avatarSrc = profile.avatarSrc;
    const bannerSrc = profile.bannerSrc;
    const bio = profile.bio;
    const displayName = profile.displayName;
    const isBeingFollowedByYou = profile.isBeingFollowedByYou;
    const isFollowingYou = profile.isFollowingYou;
    const joined = profile.joined;
    const location = profile.location
    const numFollowers = profile.numFollowers;
    const numFollowing = profile.numFollowing;
    const url = profile.url;

    
    return (
        <Wrapper>
            {error && <ErrorPage/>}
            {profileTweetHasLoaded && ( <>
            <ProfileHeader
                avatarSrc={avatarSrc}
                bannerSrc={bannerSrc}
                bio={bio}
                displayName={displayName}
                handle={handle}
                isBeingFollowedByYou={isBeingFollowedByYou}
                isFollowingYou={isFollowingYou}
                joined={joined}
                numFollowers={numFollowers}
                numFollowing={numFollowing}
                location={location}
                url={url}
                />
            <MenuBar/>

            
            {tweetIds.map(id=>{
                const tweet= tweetById[id];
                console.log(tweet)
                
                const avatarSrc = tweet.author.avatarSrc;
                const idUser = tweet.id;
                const displayName = tweet.author.displayName;
                const handle = tweet.author.handle;
                const numLikes=tweet.numLikes;
                const isLiked= tweet.isLiked;
                const numRetweets=tweet.numRetweets;
                const tweetMedia = tweet.media[0];
                const status = tweet.status;
                const timestamp = tweet.timestamp;
                const retweetFrom = tweet.retweetFrom;
                return(
                    <TweetsFromUser
                    avatarSrc={avatarSrc}
                    idUser={idUser}
                    displayName={displayName}
                    handle={handle}
                    numLikes={numLikes}
                    isLiked={isLiked}
                    numRetweets={numRetweets}
                    tweetMedia={tweetMedia}
                    status={status}
                    timestamp={timestamp}
                    retweetFrom={retweetFrom}
                    />
                )
            })}
            </>)}

        </Wrapper>
    )
}

        const Wrapper = styled.div`
        display: flex;
        align-items:center;
        width: 1000px;
        border-left: 1px solid rgb(230, 236, 240);
        border-right: 1px solid rgb(230, 236, 240);
        margin-right: 20px;
    `;

export default ProfileDetail;