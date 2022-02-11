import React, { useContext,useEffect,useState } from "react";
import { CurrentUserContext } from "./Context/CurrentUserContext";
import ProfileHeader from "./ProfileDetail/ProfileHeader";
import MenuBar from "./ProfileDetail/MenuBar";
import TweetsFromUser from "./ProfileDetail/TweetFromUser";
import styled from "styled-components";


const Profile = () =>{
const {profileInfoFromServer, status} = useContext(CurrentUserContext);

const profile = profileInfoFromServer.profile;
const avatarSrc = profile.avatarSrc;
const bannerSrc = profile.bannerSrc;
const bio = profile.bio;
const displayName = profile.displayName;
const handle = profile.handle;
const isBeingFollowedByYou = profile.isBeingFollowedByYou;
const isFollowingYou = profile.isFollowingYou;
const joined = profile.joined;
const location = profile.location;
const numFollowers = profile.numFollowers;
const numFollowing = profile.numFollowing;
const numLikes = profile.numLikes;

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

const tweetIds = profileTweetFromServer.tweetIds;
const tweetById = profileTweetFromServer.tweetsById;

return(<>
{!profileTweetFromServer ?(<div></div>)
:(
<Wrapper>
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
            />
            <MenuBar/>
            
            <TweetsFromUser
            // avatarSrc={avatarSrc}
            // displayName={displayName}
            // handle={handle}
            // numLikes={numLikes}
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

export default Profile