import { useState , useEffect} from 'react'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container } from '../componenets'
import PostForm from '../componenets/postForm'
import service from '../appwrite/config'

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
