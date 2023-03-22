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
import Footer from "./components/Footer";
import Aptitude from "./components/Learning/Aptitude";
import CsSubjects from "./components/Learning/CsSubjects";
import PopLang from "./components/Learning/PopLang";
import PopSkills from "./components/Learning/PopSkills";
import DataStructures from "./components/Learning/DataStructures";

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

            <Route path="/learning/aptitude" element={<Aptitude />} />
            <Route path="/learning/cssubjects" element={<CsSubjects />} />
            <Route
              path="/learning/datastructures"
              element={<DataStructures />}
            />
            <Route path="/learning/popularlanguages" element={<PopLang />} />
            <Route path="/learning/popularskills" element={<PopSkills />} />

            <Route path="/prevquestions" element={<PrevQuestions />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
          </Routes>
        </Container>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
