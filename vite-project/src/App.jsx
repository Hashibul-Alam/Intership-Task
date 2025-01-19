import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Assignments from "./Pages/Assignments";

function App() {
  
  return (
    <Router>
     <Routes>
      <Route path="/" element = {<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="assignments" element={<Assignments/>} />
      </Route>
     </Routes>
    </Router>
  )
}

export default App
