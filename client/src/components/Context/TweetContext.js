import React from "react";
import { createContext, useReducer } from "react";

export const TweetContext = createContext(null);

const initialState = {
    hasLoaded: false,
    tweetIds: null, 
    tweetsById:null,
};

function reducer(state, action){

    switch (action.type){
        case "receive-tweet-info-from-server":{
            return{...state, 
            hasLoaded: true,
            tweetIds: action.tweetIds,
            tweetsById: action.tweetsById,
        }
    }
}}

export const TweetProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const receiveTweetInfoFromServer = (data) =>{
        dispatch({
            type:"receive-tweet-info-from-server",
            ...data,
        });
    };
    
    return(
        <TweetContext.Provider
        value={{
            state,
            actions: {receiveTweetInfoFromServer},
        }}
        >
            {children}
        </TweetContext.Provider>
    );
};