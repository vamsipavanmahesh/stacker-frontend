import React from 'react';
import Question from './Question'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

class Home extends React.Component {
  BASE_URL = 'https://stacker-backend.herokuapp.com/api/v1'
  constructor() {
    super();
    this.state = {
      questions: [],
      currentPage: 1,
      totalPages: 100,
      currentTag: '',
      serverError: false
    }
  }

  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    fetch(`${this.BASE_URL}/questions?order=desc&sort=activity&site=stackoverflow&page=${numPage}&tagged=${this.state.currentTag}`)
    .then((response) => {
      if (!response.ok) { throw response };
      response.json().then((resolvedJson) => this.setState({questions: resolvedJson.questions.items}) );
    })
    .catch((error) => this.setState({serverError: true}) );
  };

  handleTagClick = tag => {
    this.setState({currentTag: tag})
    fetch(`${this.BASE_URL}/questions?order=desc&sort=activity&site=stackoverflow&tagged=${tag}`)
    .then((response) => {
      if (!response.ok) { throw response };
      response.json().then((resolvedJson) => this.setState({questions: resolvedJson.questions.items}) )
    })
    .catch((error) => this.setState({serverError: true}) );
  };

  componentDidMount() {
    fetch(`${this.BASE_URL}/questions?order=desc&sort=activity&site=stackoverflow`)
    .then((response) => {
      if (!response.ok) { throw response };
      response.json().then((resolvedJson) => this.setState({questions: resolvedJson.questions.items}) )
    })
    .catch((error) => this.setState({serverError: true}) );
  }

  render() {
    return <div>
      {this.state.serverError && <Error />}
      <Question
        questions={this.state.questions}
        currentPage={this.state.currentPage}
        totalPages={this.state.totalPages}
        changeCurrentPage = { (e) => this.changeCurrentPage }
        handleTagClick = {(e) => this.handleTagClick(e) }
      />  
    </div>
  }
}


class Error extends React.Component {
  render(){
    return <div>
      Sorry it's not you. It's us, we are working to fix this!
    </div>
  }
}

export default App;
