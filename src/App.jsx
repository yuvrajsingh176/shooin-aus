import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
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
