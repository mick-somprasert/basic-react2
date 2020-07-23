import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';

import Header from './components/Header';     //ส่วนหัว
import Footer from './components/Footer';     //ส่วนท้าย
import About from './components/About';       //
import Contact from './components/Contact';   //ติดต่อเรา
import Home from './components/Home';         //หน้าหลัก
import Profile from './components/Profile';   //
import Signin from './components/Signin';     //
import Signup from './components/Signup';     //
import Products from './components/Products'; //




function App() {
  return (
    <div >
      <Header />
      <Container>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/profile" component={Profile} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/products" component={Products} />
      </Container>
      <Footer />

    </div>
  );
}

export default App;
