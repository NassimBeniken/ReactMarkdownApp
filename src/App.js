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
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>
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
    const __html = marked(text, { sanitize: true})
    return { __html }
  }
  
}

export default App;
