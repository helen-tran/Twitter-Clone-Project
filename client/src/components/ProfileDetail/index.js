import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { TweetContext } from "../TweetContext";
import ProfileHeader from "./ProfileHeader";
import MenuBar from "./MenuBar";
import TweetsFromUser from "./TweetFromUser";


const ProfileDetail = ()=>{
    const{state:{tweetsById, hasLoaded}} = useContext(TweetContext);

const {profileId} = useParams();
const info = tweetsById[profileId];

// getting profile info;
const avatarSrc = info.author.avatarSrc;
const bannerSrc = info.author.bannerSrc;
const bio = info.author.bio;
const displayName = info.author.displayName;
const handle = info.author.handle;
const isBeingFollowedByYou = info.author.isBeingFollowedByYou;
const isFollowingYou = info.author.isFollowingYou;
const joined = info.author.joined;
const location = info.author.location
const numFollowers = info.author.numFollowers;
const numFollowing = info.author.numFollowing;
const url = info.author.url;

    return (
        <>
        {hasLoaded &&(
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
            url={url}
            />
            <MenuBar/>
            <TweetsFromUser
            info={info}
            avatarSrc={avatarSrc}
            displayName={displayName}
            handle={handle}
            />
        </Wrapper>
        )}</>
        )
        
        };

const Wrapper = styled.div`
    width: 1000px;
    border-left: 1px solid rgb(230, 236, 240);
    border-right: 1px solid rgb(230, 236, 240);
    margin-right: 20px;
`;

export default ProfileDetail;