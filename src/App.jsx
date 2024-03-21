import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Giveaways from './components/Giveaways';
import Pastwin from './components/Pastwin';
import Winweek from './components/Winweek';
import { Plans } from './components/Plans';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/giveaway",
      element:<Giveaways/>
    },
    {
      path: "/pastwin",
      element:<Pastwin/>
    },
    {
      path: "/winweek",
      element:<Winweek/>
    },
    {
      path: "/plan",
      element:<Plans/>
    },
  // {
  //     path: "/browse",
  //     element:<Browse/>
  // },
  // {
  //     path: "/details",
  //     element:<MovieDetails/>
  // }
])
  
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
