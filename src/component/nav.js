import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from'./component'
import Component2 from'./component2'
import Component3 from'./component3'
import Component4 from'./component4'
import Navigation from "./navigationnn"

 function nav() {
    return (
            <div class="topnav">
                  <Router>
                     <Navigation/> 


                      <Switch>
        <Route class="active" exact path="/" component={Home}/>
        <Route path="/category" component={Component2}/>
        <Route path="/products" component={Component3}/>
        <Route path="/stagiaire" component={Component4}/>
        </Switch>
      </Router>  

        </div>


    )
}
export default nav;
