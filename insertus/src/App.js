import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./components/Contact";
import PrevQuestions from "./components/PrevQuestions";
import Learning from "./components/Learning";

firebase.initializeApp({
  apiKey: "AIzaSyCvDmFRroQnsobcztxPpCFA8MZUz13d_ac",
  authDomain: "incertusproject.firebaseapp.com",
  projectId: "incertusproject",
});

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <NavigationBar user={user} />
        <Container className="mt-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/prevquestions" element={<PrevQuestions />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
