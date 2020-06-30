import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './Header/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Register from './Register/Register';
import Login from './Login/Login';
import PostCreate from './PostCreate/PostCreate';
import { UserContext } from './user-context';
import { UserService } from './services/user-services';

function App() {

    const [user, setUser] = useState(null);

    // if there is a cookie, send the req to server to know which user is loggedin
    useEffect(() => {
        async function getUser() {
            const user = await UserService.get()
            setUser(user);
        }
        getUser();
    }, []);

    return (
        <div className="Main">
            <UserContext.Provider value={{user, setUser}}> 
                <Router className="App" id="container">
                    <Header />
                    
                    <div className="container mt-4">
                        <Switch>
                            <Route path="/register">
                                <Register />
                            </Route>
                            <Route path="/login">å
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
                </Router>
            </UserContext.Provider>
        </div>
  );
}

export default App;