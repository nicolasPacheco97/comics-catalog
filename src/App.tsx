import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './utils/routes'

function App() {
  const router = createBrowserRouter([routes]);

  return (
    <main className='min-h-screen'>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
