import React, { useState, useEffect } from 'react';
import './App.scss';
import Menu from './Menu/Menu';
import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import Register from './Register/Register';
import Login from './Login/Login';
import PostCreate from './PostCreate/PostCreate';
import { UserContext } from './user-context';
import { UserService } from './services/user-services';

function App() {

    const [isLoading, setLoading] = useState(false);

    const [user, setUser] = useState(null);
    
    const history = useHistory();

    // if there is a cookie, send the req to server to know which user is loggedin
    useEffect(() => {
        async function getUser() {
            const user = await UserService.get()
            setUser(user);
            if(!user) {
               history.push('./login');
            }
        }
        getUser();
    }, [history]);

    return (
            <UserContext.Provider value={{user, setUser}}> 
                {isLoading && <div className="Loading" >Loading</div>}
                <div className="Main d-flex flex-column flex-sm-column-reverse vh-100">
                    <div className="container mt-4 flex-grow-1">
                        <Switch>
                            <Route path="/register">
                                <Register />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/post/create">
                                <PostCreate />
                            </Route>
                            <Route path="/">
                                Home!
                            </Route>
                        </Switch>
                    </div>
                    { user && <Menu className="Main__Menu" /> }
                </div>
            </UserContext.Provider>
  );
}

export default App;