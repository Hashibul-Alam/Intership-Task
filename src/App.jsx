import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Assignments from "./Pages/Assignments";
import NotesApp from './Pages/Note';

function App() {
  
  return (
    <Router>
     <Routes>
      <Route path="/" element = {<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="assignments" element={<Assignments/>} />
      <Route path="schedule" element={<NotesApp/>} />
      <Route path="recordings" element={<Assignments/>} />
      <Route path="discussions" element={<NotesApp/>} />
      <Route path="resources" element={<Assignments/>} />
      <Route path="notes" element={<NotesApp/>} />
      <Route path="downloads" element={<Assignments/>} />
      <Route path="classes" element={<NotesApp/>} />
      <Route path="courses" element={<Assignments/>} />
      <Route path="settings" element={<NotesApp />} />
      </Route>
     </Routes>
    </Router>
  )
}

export default App
