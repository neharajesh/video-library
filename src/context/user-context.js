import { createContext, useContext, useState } from "react";

export const initialUser = {
  username: "",
  password: "",
  name: "",
  age: 18,
  image: "",
  uploads: [],
  likedVideos: [],
  watchLaterVideos: [],
  watchedVideos: []
}

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(initialUser);
  const [token, setToken] = useState("");
  return (<>
    <UserContext.Provider value={{user, setUser, token, setToken}}>
      {children}
    </UserContext.Provider>
  </>)
}

export const useUser = () => {
  return useContext(UserContext);
}