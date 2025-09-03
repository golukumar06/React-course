import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contactus from './components/Contactus/Contactus'
import User from './components/User/User'
import Github, { githubInfo } from './components/Github/Github'

// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },

//       {
//         path:"about",
//         element:<About/>
//       },

//       {
//         path:"contact-us",
//         element:<Contactus/>
//       }
//     ]
//   }
// ])

/*   use this mehod for routing because it routed fast and not loaded */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='contact-us' element={<Contactus />} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
      loader={githubInfo}
      path='github' element={<Github/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
