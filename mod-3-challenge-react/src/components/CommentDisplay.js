import React from 'react'

const CommentDisplay = props => {
  return (
    <ul>
      {props.comments.map( comment => <li key={comment.id}>{comment.content}</li> )}
    </ul>
  )
}

export default CommentDisplay
