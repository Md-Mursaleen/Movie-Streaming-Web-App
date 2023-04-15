import React, { useEffect } from 'react';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { auth } from './firebase';
import Profile from './screens/Profile';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      }
      else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (<Routes>
          <Route
            exact path="/profile"
            element={<Profile />}
          />
          <Route exact path="/"
            element={<Home />} />
        </Routes>)}
      </Router>
    </div>
  );
}

export default App;
