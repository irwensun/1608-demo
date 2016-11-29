import React from 'react';
import {Link} from "react-router"
class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
      <Link to="/" activeStyle={{color:"purple"}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home"></span><br />Home</Link>
      <Link to="blog" activeStyle={{color:"purple"}} ><span className="glyphicon glyphicon-flag"></span><br />Blog</Link>
      <Link to="work" activeStyle={{color:"purple"}} ><span className="glyphicon glyphicon-glass"></span><br />Work</Link>
      <Link to="about" activeStyle={{color:"purple"}} ><span className="glyphicon glyphicon-user"></span><br />About</Link>
      </div>
    )
  }
}

export default NavFooter;
