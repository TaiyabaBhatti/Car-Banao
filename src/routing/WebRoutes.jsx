import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from '../pages/Home/HeroSection'
import HomePage from '../pages/Home/HomePage'
import ContactPage from '../pages/Contact/ContactPage'


// all the web pages for routing 

export default function WebRoutes() {
  return (
 <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/home' element={<HomePage/>}/>
  <Route path='/contact' element={<ContactPage/>}/>
 </Routes>
  )
}
