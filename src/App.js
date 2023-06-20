import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { ENDPOINT_HOMEPAGE } from './routes';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
          <Route path={ENDPOINT_HOMEPAGE} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
