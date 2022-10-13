import './App.css';
import NavBar from './Components/NabBar/NavBar';
import Intro from './Components/Intro/Intro';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Abilities from './Components/Abilities/Abilities';
import Portfolio from './Components/Portfolio/Portfolio'
import AboutMe from './Components/AboutMe/AboutMe'
import Contact from './Components/Contact/Contact'

let content=<div className="App">
       <NavBar/>
       <Routes>
           <Route path='/' element={<Intro/>}></Route>
           <Route path='/Abilities' element={<Abilities/>}></Route>
           <Route path='/Portfolio' element={<Portfolio/>}></Route>
           <Route path='/AboutMe' element={<AboutMe/>}></Route>
           <Route path='/Contact' element={<Contact/>}></Route>
       </Routes>
   </div>

function App() {
  return (
    <BrowserRouter>
        {content}
  </BrowserRouter>
  );
}

export default App;
