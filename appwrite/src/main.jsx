import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import store from './store/store.js'
import { Provider } from 'react-redux'
import Login from './pages/login.jsx'
import Home from './pages/home.jsx'
import AuthLayout from './componenets/authLayout.jsx'
import Signup from './pages/signup.jsx'
import AllPost from './pages/allPost.jsx'
import AddPost from './pages/addPost.jsx'
import EditPost from './pages/editPost.jsx'
import Post from './pages/post.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={
        <AuthLayout authenticated = {false}>
          <Login />
      </AuthLayout>}/>

      <Route path='/signup' element={
        <AuthLayout authenticated = {false}>
          <Signup />
      </AuthLayout>}/>

      <Route path='/all-posts' element={
        <AuthLayout authenticated = {true}>
          <AllPost />
      </AuthLayout>}/>

      <Route path='/add-post' element={
        <AuthLayout authenticated = {true}>
          <AddPost />
      </AuthLayout>}/>

      <Route path='/edit-post/:slug' element={
        <AuthLayout authenticated = {true}>
          <EditPost />
      </AuthLayout>}/>

      <Route path='/post/:slug' element={
        <AuthLayout authenticated = {true}>
          <Post />
      </AuthLayout>}/>

      <Route path='/edit-post/:slug' element={
        <AuthLayout authenticated = {true}>
          <EditPost />
      </AuthLayout>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
)
