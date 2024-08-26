import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    console.log(featuredImage)
    return (
       
        <Link to={`/post/${$id}`}>
            <div className='w-full rounded-lg bg-gray-100 p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={service.filePreview(featuredImage)} className='rounded-xl' alt={title}/>
                    <h1 className='text-xl font-bold'>{title}</h1>

                </div>
            </div>
        </Link>
    )
}

export default PostCard
