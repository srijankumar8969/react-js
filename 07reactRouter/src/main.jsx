import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(  //routes sirf create hua hai yaha and the whole thing is when we create route then we can use the route to render that element within it
  createRoutesFromElements(
    <Route path='/' element={<Layout />}> //since layout yaha par ek segemnt banaya hua hai by using outlet means aab jo iske children hain wo simply iske ander aajayenge
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>
      <Route 
      loader={githubInfoLoader}  //loader is used to load an information before the link is clicked here just the reference of the function is passed calling will happen automatically
        inside the component the loader information can be useed simply by using useloader hook
      path='github' 
      element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
