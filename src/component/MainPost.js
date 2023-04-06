import React , {useState} from 'react'
import { useParams } from 'react-router-dom'
import posts from './Datas'

export default function MainPost() {

    let {id} = useParams() 
    const[postss,setPosts] = useState(posts)
    console.log(postss.find(post => post.id === Number(id)))

  return (
    <div>
        MainPost : {postss.find(post=> post.id===Number(id)).title}
    </div>
  )
}
