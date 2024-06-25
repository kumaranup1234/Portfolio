import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css'
import {useEffect, useState} from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";


function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 3 seconds

        return () => clearTimeout(timer);
    }, []);

  return (
      <>
      {loading ? <LoadingScreen loading={loading} /> : <Router>
        <Routes>
            <Route path="/" element={<Home loading={loading} />} />
        </Routes>
      </Router>
      }
      </>
  )
}

export default App
