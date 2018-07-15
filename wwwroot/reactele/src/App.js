import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/reset.css'
// import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap';

import 'element-theme-default';



import Index from './compontents/Index';
import Search from './compontents/Search';
import Discovery from './compontents/Discovery';
import Booklist from './compontents/Booklist';
import User from './compontents/User';
import Shop from './compontents/Shop';
import GroupBuying_detail from './compontents/GroupBuying_detail';

import Register from './compontents/Register';
import Confirmlogin from './compontents/Confirmlogin';

import ConfirmOrder from './compontents/ConfirmOrder';


class App extends Component {
  render() {
    return (
     
      <Router>

              <div>            
                <Route exact path="/" component={Index} />
                <Route path="/discovery" component={Discovery} />
                <Route path="/booklist" component={Booklist} />
                <Route path="/user" component={User} /> 
                <Route path="/search" component={Search} />
                <Route path="/shop" component={Shop} />
                <Route path="/groupBuying_detail/:id" component={GroupBuying_detail} />
                <Route path="/register" component={Register} />
                <Route path="/confirmlogin" component={Confirmlogin} />
                <Route path="/confirmOrder/:id" component={ConfirmOrder} />
             </div>
        </Router>

    );
  }
}

export default App;
