import React, {Component} from 'react'

export default class CommentForm extends Component {
  state = {
    userInput: ''
  }

  handleChange = event => {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.props.handleComment}>
        <input name="comment" value={this.state.userInput} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    )
  }
}
