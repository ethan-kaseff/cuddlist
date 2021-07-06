import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import ProfileInformation from "./components/ProfileInformation";
import User from "./components/User";
import CuddlistProfile from "./components/CuddlistProfile";
import SessionRequest from "./components/SessionRequest";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";

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
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/search-results/:location" exact={true}>
          <SearchResults />
        </Route>
        <Route path="/cuddlists/:id" exact={true}>
          <CuddlistProfile />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/cuddlists/:id/session-request'>
          <SessionRequest />
        </ProtectedRoute>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute>
          <Route path='/profile-page' exact={true}>
            <ProfileInformation />
          </Route>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
