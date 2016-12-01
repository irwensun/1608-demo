import React from "react";
class Card extends React.Component{
  render(){
    return(
    <div className="card clearfix">
    <div className="card-left" >{this.props.index}</div>
    <div className="card-right">
    <h3>{this.props.title}</h3>
    <p>{this.props.data}</p>
    </div>
    </div>
    )
  }
}
Card.defaultProps={
  index:1,
  title:"第一天",
  data:"2016.11.21"
}
Card.propTypes={
  index:React.PropTypes.number,
  title:React.PropTypes.string,
  date:React.PropTypes.string
}
export default Card
