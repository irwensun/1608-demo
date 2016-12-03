import React from 'react';
import { Router, Route, hashHistory,IndexRoute } from "react-router"
import App from "./App"
import Home from "./Home"
import Blog from "./Blog"
import About from "./About"
import Work from "./Work"
import Item from "./item"
class Routers extends React.Component {
  render () {
    return(
      <div>
       <Router history={hashHistory}>
       <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="blog" component={Blog}/>
        <Route path="about" component={About}/>
        <Route path="work" component={Work}/>
        <Route path="item/:title" component={Item}/>

       </Route>
       </Router>
      </div>
    )
  }
}

export default Routers;
