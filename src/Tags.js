import React from 'react';
import './Tags.css'

class Tags extends React.Component {

  handleTagClick(tag){
    this.props.handleTagClick(tag);
  }

  render() {
    return <div>
      { this.props.tags.map((tag, index) => <span className="tagged-box" onClick={(e) => this.handleTagClick(tag)} key={index} ><a key={index}>{tag}</a></span>) }
    </div>
  }
}

export default Tags;
