import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Default from "./components/Default";


class App extends Component {
  render (){
    return(
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch>
    </React.Fragment>
    )
  }
}

export default App;