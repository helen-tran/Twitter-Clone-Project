import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "./Context/CurrentUserContext";
import ProfileHeader from "./ProfileDetail/ProfileHeader";
import MenuBar from "./ProfileDetail/MenuBar";
import TweetsFromUser from "./ProfileDetail/TweetFromUser";
import styled from "styled-components";
import CircularLoading from "./CircularLoading";
import ErrorPage from "./ErrorPage";

const Profile = () => {
  const { profileInfoFromServer } = useContext(CurrentUserContext);

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

  const [error, setError] = useState(null);
  const [profileTweetHasLoaded, setProfileTweetHasLoaded] = useState(false);
  const [profileTweetFromServer, setProfileTweetFromServer] = useState(null);

  useEffect(() => {
    fetch(`/api/treasurymog/feed`, {
      headers: {
        Accept: "application.json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          setError(error.message);
        }
        return res.json();
      })
      .then((data) => {
        setProfileTweetHasLoaded(true);
        setProfileTweetFromServer(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  // Setting This so it doesn't break my
  if (!profileTweetHasLoaded || !profileTweetFromServer) {
    return <CircularLoading />;
  }

  const tweetIds = profileTweetFromServer.tweetIds;
  const tweetById = profileTweetFromServer.tweetsById;

  return (
    <Wrapper>
      {error && <ErrorPage />}
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
      <MenuBar />

      {tweetIds.map((id) => {
        const tweet = tweetById[id];

        const avatarSrc = tweet.author.avatarSrc;
        const idUser = tweet.id;
        const displayName = tweet.author.displayName;
        const handle = tweet.author.handle;
        const numLikes = tweet.numLikes;
        const isLiked = tweet.isLiked;
        const numRetweets = tweet.numRetweets;
        const tweetMedia = tweet.media[0];
        const status = tweet.status;
        const timestamp = tweet.timestamp;
        const retweetFrom = tweet.retweetFrom;
        return (
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
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1000px;
  border-left: 1px solid rgb(230, 236, 240);
  border-right: 1px solid rgb(230, 236, 240);
  margin-right: 20px;
`;

export default Profile;
