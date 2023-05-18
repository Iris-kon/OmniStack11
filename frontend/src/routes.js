import React from 'react'
import { BrowserRouter, Routes as DomRoutes, Route } from 'react-router-dom'

import Logon from './pages/Logon'
import NewIncident from './pages/NewIncident'
import Profile from './pages/Profile'
import Register from './pages/Register'

export default function Routes(){
    return(
        <BrowserRouter>
            <DomRoutes>
                <Route path="/" exact element={<Logon />} />
                <Route path="/register" element={<Register />} />

                <Route path="/profile" element={<Profile />} />
                <Route path="/incidents/new" element={<NewIncident />} />
            </DomRoutes>
        </BrowserRouter>
    )
}