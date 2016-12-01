import React from "react";
class ShowGit extends React.Component{
  render(){
    let info = this.props.gitInfo;
    let styles = {
      img:{
        width:"100%",
        maxWidth:"130px",
        borderRadius:"50%",
        boxShadow:"rgba(0,0,0,0.35) 3px 5px 10px",
      }
    }
    return(
      <div>
      <img src={info.avatar_url} style={styles.img} />
      <div className="show-git">
      <p>followers<br/>{info.followers}</p>
      <p>followers<br/>{info.followers}</p>
      <p>public_repos<br/>{info.public_repos}</p>
      </div>
      </div>
    )
  }
}
export default ShowGit
