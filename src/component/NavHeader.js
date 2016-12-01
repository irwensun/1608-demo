import React from 'react';

class NavHeader extends React.Component {
  handleBack(){
    this.context.router.goBack()
  }
  render () {
    return(
      <div className="Nav-Header">
      <button type="button" onClick={this.handleBack.bind(this)}>
       <span className="glyphicon glyphicon-chevron-left"></span> Back
      </button>
      <h3>Anthony@{this.props.title}</h3>
      <button type="button" >
       <span className="glyphicon glyphicon-heart-empty"></span>
      </button>
      </div>
    )
  }
}
NavHeader.contextTypes={
  router:React.PropTypes.object
}

export default NavHeader;
