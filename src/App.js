import React, { useEffect, useState } from 'react';
import './App.scss';
import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import Register from './Register/Register';
import Login from './Login/Login';
import PostCreate from './PostCreate/PostCreate';
import { UserContext } from './user-context';
import { UserService } from './services/user-service';
import Menu from './Menu/Menu';
import AppLoader from './AppLoader/AppLoader';
import Feed from './Feed/Feed';
import Profile from './Profile/Profile';
import Search from './Search/Search';
import PostPage from './PostPage/PostPage';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
      async function getUser() {
          const user = await UserService.get();
          setUser(user);
          setLoading(false);
          if (!user) {
              history.push('/login');
          }
      }
      getUser();
  }, [history]);

  return (
    <UserContext.Provider value={{user, setUser}}>
        <AppLoader show={isLoading} />
        <div className="App d-flex flex-column flex-sm-column-reverse vh-100">
            <div className="flex-grow-1 main">
                <div className="container p-0 mt-lg-4">
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
                        <Route path="/profile/:id">
                            <Profile />
                        </Route>
                        <Route path="/post/:id">
                            <PostPage />
                        </Route>
                        <Route path="/search">
                            <Search />
                        </Route>
                        <Route path="/">
                            <Feed />
                        </Route>
                    </Switch>
                </div>
            </div>
            { user && <Menu /> }
        </div>
    </UserContext.Provider>

  );
}

export default App;
