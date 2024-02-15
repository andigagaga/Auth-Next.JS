import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Interests, Login, Register } from '../components'
import Profile from '../pages/Profile'
import ProfileComponents from '../components/ProfileComponents'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/interests' element={<Interests/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/compo' element={<ProfileComponents/>}/>
    </Routes>
  )
}
