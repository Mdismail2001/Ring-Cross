import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainContainer from './components/RingAndCross/MainContainer.jsx';
import Home from './components/Layout/Home.jsx';
import Login from './components/AuthLayout/Login.jsx';
import Register from './components/AuthLayout/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {path:"/", element:<Home></Home>},
      {path:'/play', element:<MainContainer></MainContainer>},
      // auth pages
      {path:'/login', element:<Login></Login>},
      {path:'/register', element:<Register></Register>},
    ]
  },

  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
