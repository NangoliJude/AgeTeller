import React, { Component } from 'react';
import Home from './home';
import Main from './main';
import NavBar from './navbar';
import {BrowserRouter, Route } from 'react-router-dom'


class App extends Component{
    render(){
        return(
        <div>
         <BrowserRouter>
         <div>
            <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/main" component={Main}/>
          </div>
         </BrowserRouter>
         </div>
         )
    }
};

export default App;