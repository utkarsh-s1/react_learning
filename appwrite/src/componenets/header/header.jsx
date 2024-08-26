import React from 'react'
import { Container, Logout, Logo } from '../index'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



function Header() {
    const auth = useSelector((state) => state.auth.status)
    const nav = useNavigate()
    console.log(auth)
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !auth,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !auth,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: auth,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: auth,
        },
    ]
    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to="/">
                            <Logo width="70px"></Logo>
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => (
                            item.active ? (<li key={item.name}>
                                <button onClick={() => nav(item.slug)} className='inline-block px-6 py-2 duration-200 hover:bg-blue-50 rounded-full'>{item.name}</button>
                                </li>) : null
                            ))}

                        {auth && (
                            <li>
                                <Logout/>
                            </li>
                        )}

                        

                    </ul>
                    

                </nav>
            </Container>

        </header>
    )
}

export default Header
