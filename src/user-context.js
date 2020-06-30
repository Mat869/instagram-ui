import React from 'react';

export const UserContext = React.createContext({
    user: null, // the user currently logged
    setUser: () => {}
});