import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image'
import Like from './components/Like'
import CommentForm from './components/CommentForm'
import CommentDisplay from './components/CommentDisplay'

class App extends Component {
  state = {
    image: {
      id: 0,
      url: '',
      name: '',
      like_count: 0,
      comments: []
    }
  }

  componentDidMount(){
    fetch(`https://randopic.herokuapp.com/images/${'84cf7485-892e-4946-ae4e-936eeddca40c'}`)
    .then(res => res.json())
    .then( image => {
      this.setState({
        image: {...image}
      })
    })
  }

  handleLike = () => {
    fetch('https://randopic.herokuapp.com/likes/', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: this.state.image.id
      })
    })

    this.setState({
      image: { ...this.state.image, like_count: this.state.image.like_count + 1}
    })
  }

  handleComment = event => {
    event.preventDefault()
    const comment = {
      id: Date.now(),
      content: event.target.comment.value,
    }

    fetch('https://randopic.herokuapp.com/comments/', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: this.state.image.id,
        content: event.target.comment.value
      })
    })
    this.setState({
      image: {
        ...this.state.image,
        comments: [...this.state.image.comments, comment]
      }
    })
  }

  render() {
    const { id, url, name, like_count, comments } = {...this.state.image}

    return (
      <div className="App">
        <Image url={url}/>
        <h2>{name}</h2>
        <Like likes={like_count} handleLike={this.handleLike}/>
        <CommentForm handleComment={this.handleComment} />
        <CommentDisplay comments={comments} />
      </div>
    );
  }
}

export default App;
