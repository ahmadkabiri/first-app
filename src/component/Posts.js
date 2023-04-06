import React,{useState} from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import posts from './Datas'


export default function Posts() {

    const[postss,setPosts] = useState(posts)
console.log(postss)
  return (
    <div>
        {postss.map(post=>(
            <>
            <Link  to={`/post/${post.id}`}>{post.title}</Link>
            <hr />
            </>
            ))}
    </div>
  )
}
