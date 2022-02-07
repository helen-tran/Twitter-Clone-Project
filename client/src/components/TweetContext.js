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
    case "loading":{
    return{...state,
        hasLoaded:false
    }
}
case "loaded":{
    return{...state,
        hasLoaded:true
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
    
    const loadingState = ()=>{
        dispatch({
            type:"loading",
        })
    }
    const loadedState = ()=>{
        dispatch({
            type:"loaded",
        })
    }
    return(
        <TweetContext.Provider
        value={{
            state,
            actions: {receiveTweetInfoFromServer, loadingState, loadedState},
        }}
        >
            {children}
        </TweetContext.Provider>
    );
};