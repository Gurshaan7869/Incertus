import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PrevQuestions from "./components/PrevQuestions";
import Learning from "./components/Learning";
import Footer from "./components/Footer";
import Aptitude from "./components/Learning/Aptitude";
import CsSubjects from "./components/Learning/CsSubjects";
import PopLang from "./components/Learning/PopLang";
import PopSkills from "./components/Learning/PopSkills";
import DataStructures from "./components/Learning/DataStructures";
import Predict from "./components/Predict";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";

firebase.initializeApp({
  apiKey: "AIzaSyCvDmFRroQnsobcztxPpCFA8MZUz13d_ac",
  authDomain: "incertusproject.firebaseapp.com",
  projectId: "incertusproject",
});

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="yell loading">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <NavigationBar user={user} />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/learning"
            element={user ? <Learning /> : <Navigate to="/login" />}
          />

          <Route
            path="/learning/aptitude"
            element={user ? <Aptitude /> : <Navigate to="/login" />}
          />
          <Route
            path="/learning/cssubjects"
            element={user ? <CsSubjects /> : <Navigate to="/login" />}
          />
          <Route
            path="/learning/datastructures"
            element={user ? <DataStructures /> : <Navigate to="/login" />}
          />
          <Route
            path="/learning/popularlanguages"
            element={user ? <PopLang /> : <Navigate to="/login" />}
          />
          <Route
            path="/learning/popularskills"
            element={user ? <PopSkills /> : <Navigate to="/login" />}
          />

          <Route
            path="/predict"
            element={user ? <Predict /> : <Navigate to="/login" />}
          />
          <Route
            path="/prevquestions"
            element={user ? <PrevQuestions /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
