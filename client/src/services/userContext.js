import { createContext, useState } from 'react';

const [user, setUser] = useState();

const UserContext = createContext({
    user, setUser
});

const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ user, setUser }}> {children}</UserContext.Provider>
    )
}
export { UserProvider, UserContext };