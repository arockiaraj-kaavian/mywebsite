import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';
import './App.css';


export default function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

