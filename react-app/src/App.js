import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
// import ProfileInformation from "./components/ProfileInformation";
import MyDashboard from "./components/MyDashboard";
import User from "./components/User";
import CuddlistProfile from "./components/CuddlistProfile";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

import { authenticate } from "./store/session";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
      // immediately invoking asynchronous function 
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <div className='relative min-h-screen'>
        <div className='pb-12'>
          <NavBar />
          <Switch>
            <Route path='/chat' exact={true}>
              <Chat />
            </Route>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/search-results/:location" exact={true}>
              <SearchResults />
            </Route>
            <Route path="/cuddlists/:id" exact={true}>
              <CuddlistProfile />
            </Route>
            <ProtectedRoute path="/users" exact={true}>
              <UsersList/>
            </ProtectedRoute>
            <ProtectedRoute path="/users/:userId" exact={true}>
              <User />
            </ProtectedRoute>
            <ProtectedRoute path="/my-dashboard" exact={true}>
              <MyDashboard />
            </ProtectedRoute>
          </Switch>
        </div>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
