import React , {useState} from 'react'
import { useParams, Navigate } from 'react-router-dom'
import posts from './Datas'


export default function MainPost() {

    let {id} = useParams() 
    const[postss,setPosts] = useState(posts)
    
    let hasPost = postss.some(post=> post.id === Number(id))

    console.log(hasPost)

  return (
    <div>
        {hasPost ? (
            <>
            MainPost : {postss.find(post=> post.id===Number(id)).title}
            </>
            
        ) : (
            <>
            <Navigate to="/posts"></Navigate>
            </>
        ) }
    </div>
  )
}
