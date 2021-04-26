import React from "react";
import logo from './logo.svg';
import './App.css';

import { Button, Container,Row,Col, Form } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/home";
import Course from "./components/Course";
import Allcourses from "./components/allcourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menus from "./components/menus";
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  const btnHandle=()=>{toast.error("done",{position:"top-center "})};

  return (
    <div>
      <Router>
      <ToastContainer />
     <Container>
       <Header/>
       <Row >
         <Col md={4}>
              <h1>
                <Menus/>
              </h1>

         </Col>
         <Col md={8}>
          <Route path="/" component={Home} exact />
          <Route path="/add-courses" component={AddCourse} exact/>
          <Route path="/view-courses" component={Allcourses} exact/>
          <Route path="/about" component={Home} exact/>
          <Route path="/contact" component={Header} exact/>
         
         </Col>

       </Row>
     </Container>
     </Router>
   </div>
  );
}

export default App;
