import React, { useState } from 'react';
import Login from '../../src/components/login.js';


function LoginInPage() {
    const [user, setUser] = useState();
    // mutate the provider into state 

    if (!user) {
        return <Login setUser={setUser}></Login>
    }
};

export default LoginInPage();


