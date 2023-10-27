import './App.css';
import Header from './components/layout/header/Header.js';
import * as ReactRouterDOM from "react-router-dom";
import Main from "./components/pages/main/Main";
import React from "react";
import About from "./components/pages/about/About";
import Projects from "./components/pages/projects/Projects";
import Contacts from "./components/pages/contacts/Contacts";


const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Routes = ReactRouterDOM.Routes;

function App() {
  return (
    <main>
      <Header/>
        <Router>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/projects"} element={<Projects/>}/>
                <Route path={"/contacts"} element={<Contacts/>}/>
            </Routes>
        </Router>
    </main>
  );
}

export default App;
