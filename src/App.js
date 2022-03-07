import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homescreens from "./components/Home/Homescreens";
import PostRoom from "./components/post/PostRoom";

const App = () => {
  return (
    <>
     <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Homescreens/>} exact/>
            <Route path="/postRoom" element={<PostRoom/>}/>
          </Routes>
        </main>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
