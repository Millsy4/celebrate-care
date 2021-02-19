import React from 'react';


const [user, setUser] = useState();

if (!user) {
    return <Login setUser={setUser}></Login>
};

export default UserContext;