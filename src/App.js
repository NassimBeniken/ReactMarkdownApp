import React from 'react';
import './App.css'
import { sampleText } from './sampleText'
import marked from 'marked'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: sampleText
    }
  }

  componentDidMount() {
    const savedText = localStorage.getItem("text")
    if (savedText) {
      this.setState({
        text: savedText
    })
    } else {
      this.setState({
        text: sampleText
      })
    }
  }

  componentDidUpdate() {
    const text = this.state.text
    localStorage.setItem("text", text)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              onChange={this.handleChange}
              value={this.state.text}
              className="form-control"
              rows="35"/>
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={{ __html: this.renderText(this.state.text)}}/>
          </div>
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  renderText = (text) => {
    return marked(text, { sanitize: true})
  }
  
}

export default App;
