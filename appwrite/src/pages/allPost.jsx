import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container } from '../componenets'
import PostCard from '../componenets/postCard'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        service.getActivePosts([]).then((allposts)=>{
            console.log(allposts)
            if(allposts){
            setPosts(allposts.documents)
            }
        })

    },[])
    return (
        <div className='w-full py-6'>
            <Container>
                {posts.map((p)=>{
                    return <PostCard key={p.$id} {...p}/>
                })}
            </Container>

        </div>
    )
}

export default AllPost
