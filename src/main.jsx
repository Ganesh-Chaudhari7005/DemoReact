import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import {PassGen} from './PassGen.jsx'
import { ShoppingStore } from './ShoppingStore.jsx'
import { WeatherApp } from './weatherapp.jsx'
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
      <Route index element={<Home />} />
      <Route path="shoppingstore" element={<ShoppingStore />} />
      <Route path="passwordgenerator" element={<PassGen />} />
      <Route path="wheather" element={<WeatherApp />} />
    </Route>,
  ),
);
createRoot(document.getElementById('root')).render(
    <RouterProvider  router={routes}/>
)
