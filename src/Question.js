import React from 'react';
import Card from 'react-bootstrap/Card';
import Tags from './Tags'
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

class Question extends React.Component {

  render() {
    return <div>
      { this.props.questions.length === 0 ? 
        'Loading ..' :
        <div>
          {this.props.questions.map(question =>
            <Card>
              <Card.Body>
                <span> { <a href={question.link}> {question.title} </a> } </span>
                <span> views - { question.view_count } </span>
                <span> answers - { question.answer_count } </span>
                
                <Tags tags={question.tags} handleTagClick={(e) => this.props.handleTagClick(e)}/>
              </Card.Body>
            </Card>
          )}
          <Pagination 
            currentPage={this.props.currentPage}
            totalPages={this.props.totalPages}
            changeCurrentPage={this.props.changeCurrentPage()}
          />
        </div>
      }
    </div>
  }
}

export default Question;
