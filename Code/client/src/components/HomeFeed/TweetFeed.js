import React, { useContext } from "react";
import { TweetContext } from "../Context/TweetContext";
import styled from "styled-components";
import TweetContent from "../TweetComponent/TweetContent";
import ActionBar from "../TweetComponent/ActionBar";
import { Link, useNavigate } from "react-router-dom";
import PostTweet from "./PostTweet";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import CircularLoading from "../CircularLoading";

const TweetFeed = ({ fetchHomeTweets }) => {
  const {
    state: { tweetIds, tweetsById, hasLoaded },
  } = useContext(TweetContext);
  const { status } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <PageName>Home</PageName>

      {status === "idle" ? (
        <PostTweet fetchHomeTweets={fetchHomeTweets} />
      ) : (
        <CircularLoading />
      )}

      {tweetIds.map((id) => {
        const tweet = tweetsById[id];
        // content for tweets
        const idUser = tweet.id;
        const displayName = tweet.author.displayName;
        const tweetMedia = tweet.media[0];
        const handle = tweet.author.handle;
        const avatarSrc = tweet.author.avatarSrc;
        const status = tweet.status;
        const timestamp = tweet.timestamp;

        const retweetFrom = tweet.retweetFrom;

        // action bar
        const isLiked = tweet.isLiked;
        const isRetweeted = tweet.isRetweeted;
        const numLikes = tweet.numLikes;
        const numRetweets = tweet.numRetweets;

        const handleEnter = (event) => {
          if (event.key === "Enter") {
            navigate(`/tweet/${idUser}`);
          }
        };

        return (
          <div
            aria-label="View Tweet Details"
            tabIndex="0"
            onKeyDown={() => handleEnter}
            key={idUser}
          >
            {hasLoaded ? (
              <>
                <StyledLink key={idUser} to={`/tweet/${idUser}`}>
                  <TweetContent
                    idUser={idUser}
                    displayName={displayName}
                    handle={handle}
                    avatarSrc={avatarSrc}
                    timestamp={timestamp}
                    tweetMedia={tweetMedia}
                    status={status}
                    retweetFrom={retweetFrom}
                  />
                </StyledLink>
                <ActionBar
                  isLiked={isLiked}
                  isRetweeted={isRetweeted}
                  numLikes={numLikes}
                  numRetweets={numRetweets}
                />
              </>
            ) : (
              <CircularLoading />
            )}
          </div>
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

const PageName = styled.div`
  padding: 15px 0 15px 20px;
  font-weight: bold;
  color: black;
  font-size: 22px;
  border-bottom: 1px solid rgb(230, 236, 240);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default TweetFeed;
