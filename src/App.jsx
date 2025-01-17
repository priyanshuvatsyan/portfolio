import Home from './componants/Home/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Project from './componants/Projects/Project'
import Navbar from './componants/Navbar/Navbar'
import About from './componants/about/About'
import Contact from './componants/Contact/Contact'

import './App.css'

function App() {
 

  return (
    <>
    {/* <Navbar/>
    <Home/> */}

     <Router>
         <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/project" element={<Project />} />
         <Route path="/about" element={<Project />} />
       <Route path="/contact" element={<Contact />} /> 
         </Routes>
     </Router>
   
    </>
  )
}

export default App
