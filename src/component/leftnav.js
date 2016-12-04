import React from "react";
import {Link} from "react-router"
class LeftNav extends React.Component{
  render(){
    return(
      <div className="left-wrap">
       <h3>Anthony@{this.props.title}</h3>
        <Link to="/" activeStyle={{backgroundColor:"rgba(0,0,0,0.5)"}} onlyActiveOnIndex={true}>Home</Link>
        <Link to="blog" activeStyle={{backgroundColor:"rgba(0,0,0,0.5)"}} onlyActiveOnIndex={true}>Blog</Link>
        <Link to="work" activeStyle={{backgroundColor:"rgba(0,0,0,0.5)"}} onlyActiveOnIndex={true}>Work</Link>
        <Link to="about" activeStyle={{backgroundColor:"rgba(0,0,0,0.5)"}} onlyActiveOnIndex={true}>About</Link>

      </div>
    )
  }
}
export default LeftNav;
