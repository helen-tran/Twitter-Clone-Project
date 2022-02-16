import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

import HomeFeed from "./HomeFeed";
import TweetDetails from "./TweetDetails";
import ProfileDetail from "./ProfileDetail";
import Sidebar from "./Sidebar";
import ErrorPage from "./ErrorPage";
import Profile from "./Profile";
import { CurrentUserContext } from "./Context/CurrentUserContext";

function App() {
  const { status } = useContext(CurrentUserContext);
  return (
    <>
      {status === "idle" && (
        <>
          <GlobalStyle />
          <Router>
            <Wrapper>
              <Sidebar />
              <Routes>
                <Route path="/" exact element={<HomeFeed />} />
                <Route path="/notifications" />
                <Route path="/error-page" element={<ErrorPage />} />
                <Route path="/bookmarks" />
                <Route path="/tweet/:tweetId" element={<TweetDetails />} />
                <Route path="/treasurymog" element={<Profile />} />
                <Route path="/:handle" element={<ProfileDetail />} />
              </Routes>
            </Wrapper>
          </Router>
        </>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
export default App;
