import React from 'react';
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
import Footer from './Footer/Footer';

function App() {

  return (
    <body className="Body">
        <Router className="App">
            <main>
            <Header />

            <div className="container mt-4">
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
            </main>
            <footer>
                <Footer />
            </footer>
        </Router>
    </body>
    
  );
}

export default App;