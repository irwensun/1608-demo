import React from 'react';
import echarts from "echarts"

class Work extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
        title: { text: '我的技能展示',textStyle:{color:"teal"},left:"center"},
        tooltip: {},
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  }
  render () {
    return(
      <div id="main" style={{width:"100%",height:"auto"}}>
      work页面
      </div>
    )
  }
}

export default Work;
