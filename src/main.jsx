import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

const routes = createBrowserRouter(
  // {
  //     path :'/',
  //     element : <App/>,
  //     children : [
  //         {
  //             path : "",
  //             element : <Home/>
  //         },
  //         {
  //             path : "about",
  //             element : <About/>
  //         },
  //         {
  //             path : "contact",
  //             element : <Contact/>
  //         }
  //     ]
  // }

  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} /> // shows at "/"
      <Route path="about" element={<About />} /> // "/about"
      <Route path="contact" element={<Contact />} /> // "/contact"
    </Route>,
  ),
);
createRoot(document.getElementById('root')).render(
    <RouterProvider  router={routes}/>
)
