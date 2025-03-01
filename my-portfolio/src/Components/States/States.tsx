import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Mail from '../Mail/Mail'




const States = () => {
  return (
    <div>
        <Navbar></Navbar>
   <Home></Home>
   <About></About>
   <Skills></Skills>
   <Projects></Projects>
   <Mail></Mail>
    </div>
  )
}

export default States