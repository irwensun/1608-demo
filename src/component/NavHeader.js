import React from 'react';

class NavHeader extends React.Component {
  render () {
    return(
      <div className="Nav-Header">
      <button type="button" >
       <span className="glyphicon glyphicon-chevron-left"></span> Back
      </button>
      <h3>Anthony@Home</h3>
      <button type="button" >
       <span className="glyphicon glyphicon-heart-empty"></span>
      </button>
      </div>
    )
  }
}

export default NavHeader;
