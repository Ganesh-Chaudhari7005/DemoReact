// import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './Footer';
function App() {

  
  return (
    <>
      <div className="h-screen w-screen d-flex justify-center">
        <Header />
        <Outlet />
        <Footer/>
      </div>
    </>
  );
}

export default App
