import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { ENDPOINT_HOMEPAGE } from './routes';
import Home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Routes>
          <Route path={ENDPOINT_HOMEPAGE} element={<Home />} />
      </Routes>

      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </>
  );
}

export default App;
