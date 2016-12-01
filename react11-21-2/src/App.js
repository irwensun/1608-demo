import React from "react";
import Card from "./component/card";
import {data} from "./data"
class App extends React.Component{
  render(){
    let app = data.map(function(item,index){
    return  <Card key={index} title={item.title} index={item.index} data={item.data}/>
    })
    return(
     <div>
     {app}
     </div>
    )
  }
}
export default App
