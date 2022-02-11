import React, {createContext, useReducer} from "react";
export const ProfileDetailContext = createContext(null);

const initialState ={
    hasLoaded: false,
    tweets: null, 
}

function reducer(state, action){
    switch(action.type){
        case "receive-profile-tweet-from-server":{
            return{...state, 
                hasLoaded: true,
                tweets: action.tweet,
        }
    }
}}

export const ProfileDetailProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const receiveProfileTweet = (data)=>{
        dispatch({
            type: "receive-profile-tweet-from-server",
            ...data,
        });
    };
    return(
        <ProfileDetailContext.Provider
        value={{
            state,
            actions: {receiveProfileTweet}
        }}
        >
            {children}
        </ProfileDetailContext.Provider>

    )
}
