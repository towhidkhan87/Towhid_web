import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Services from './Components/Services'
import Service from './Components/Service'
import Root from './Root'

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/services/:name",
        element: <Service />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)