import React, { useEffect, createContext} from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState("loading");
    const [profileInfoFromServer, setProfileInfoFromServer] = React.useState(null);

useEffect(()=>{
fetch('/api/me/profile',{
    headers:{
        'Accept': 'application.json'
    }
})
.then(res =>{
    return res.json()
})
.then(data =>{
    setStatus("idle");
    setCurrentUser(data.profile.handle);
    setProfileInfoFromServer(data);
})
},[]);

    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`

return (
<CurrentUserContext.Provider value={{ currentUser, status, profileInfoFromServer }}>
        {children}
</CurrentUserContext.Provider>
    );
};