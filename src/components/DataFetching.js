import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
  const [post, setPost] = useState({})
  const [inputPostId, setInputPostId] = useState(1)
  const [btnClickId, setBtnClickId] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${btnClickId}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => console.log(err))
  }, [btnClickId])

  const handlePostId = inputPostId => {
    setBtnClickId(inputPostId)
  }

  return (
    <>
      <input type="text" value={inputPostId} onChange={e => setInputPostId(e.target.value)}/>
      <button onClick={() => handlePostId(inputPostId)}>Fetch Post</button>
      <p>{post.title}</p>
    </>
  )
}

export default DataFetching
