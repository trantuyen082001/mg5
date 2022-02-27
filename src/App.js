import React from "react";
import {Container} from 'react-bootstrap';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homescreens from "./components/Home/Homescreens";

const App = () => {
  return (
    <>
      <Header/>
      <main>
          <Homescreens/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
