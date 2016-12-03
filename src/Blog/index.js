import React from 'react';
import BlogCard from "../component/BlogCard";
class Blog extends React.Component {
  render () {
    let cards=data.map((item,i) => <BlogCard {...item} key={i} />)
    return(
      <div className="blog-wrap">
      {cards}
      </div>
    )
  }
}

export default Blog;
