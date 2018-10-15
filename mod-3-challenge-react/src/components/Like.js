import React from 'react'

const Like = props => {
  const { likes, handleLike } = {...props}

  return (
    <div>
      Likes: {likes}
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default Like
