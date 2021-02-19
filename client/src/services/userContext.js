import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

function UserProvider({ ...props }) {
    const [user, setUser] = useState({
        email: '',
        password: '',
        familycode: ''
    }
    );
    return (
        <UserContext.Provider value={{ user, setUser }} {...props} />
    )
}
function useUserContext() {
    return useContext(UserContext)
}
export { UserProvider, useUserContext };