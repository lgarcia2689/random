import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Nail from './Nail'
import Services  from "./Services";
import Gallery from "./Gallery";
import Events from "./Events";
import Contact from "./Contact";
import './App.css'

const App = () => {
  return (
    <div>
 
      <Router>
      <nav>
          <header className="App-header">
        <div className="App-image">
          <div className='logo'>

          <a  href="Gallery"><img src="https://i0.wp.com/luxenailboutique.com/wp-content/uploads/2018/07/header-flowers.png?resize=300%2C133" title="insert title" alt="insert description here"/></a>

           
            
          </div>
          <div className='submenu'>
            <p className ='home'><Link to="/">Home </Link></p>
            <p className='services'><Link to='Services'>Services</Link></p>
            <p className='services'><Link to='Gallery'></Link></p>
            <p className='events'><Link to='Events'>Events</Link></p>
            <p className='contact'><Link to='Contact'>Contact</Link></p>
            
          </div>
        </div>
      </header>

          {/* Links to navigate us Home (`/`) and Characters (`/Characters`) */}
 
 
      </nav>
        <Switch>
        <Route path="/Contact">
            <Contact/>
          </Route>
             <Route path="/Events">
            <Events/>
          </Route>
          <Route path="/Gallery">
            <Gallery/>
          </Route>
             <Route path="/Services">
            <Services/>
          </Route>
          <Route path="/">
            <Nail/>
          </Route>
          

        </Switch>
        </Router>
    </div>
  );
};
export default App;