import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
         path: "about",
         element: <About/>
      },
      {
        path:'service',
        element: <Services/>
      },{
        path:'contact',
        element: <Contact/>
      },{
        path: "*",
        element: <h1>Not Found</h1>,
      }
    ],
  },
]);



function App() {
  

  return (
    <>
    <main className="w-full min-h-screen">

     <RouterProvider router={router} />
    </main>
    </>
  )
}

export default App
