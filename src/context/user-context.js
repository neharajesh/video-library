import { createContext, useContext, useState } from "react";

const initialUser = {
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

  return (<>
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  </>)
}

export const useUser = () => {
  return useContext(UserContext);
}