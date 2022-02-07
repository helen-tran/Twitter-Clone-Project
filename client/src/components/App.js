import React from "react";
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

import HomeFeed from "./HomeFeed";
import TweetDetails from "./TweetDetails"
import Profile from "./Profile";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Wrapper>
      <Sidebar/>
        <Routes>
          <Route path="/" exact element={<HomeFeed/>} />
          <Route path="/notifications" />
          <Route path="/bookmarks" />
          <Route path="/tweet/:tweetId" element={<TweetDetails/>}/>
          <Route path="/:profileId" element={<Profile/>} />
        </Routes>
    </Wrapper>
    </Router>
    </>
  );
}

const Wrapper = styled.div`
display: flex;

`;
export default App;
