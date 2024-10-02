import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu.jsx'

import BookingForm from './components/BookingForm.jsx'

import Layout from './components/admin/Layout.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
  Navigate
} from "react-router-dom";

import Reservationlist from './components/admin/Reservationlist.jsx'
import Orderlist from './components/admin/Orderlist.jsx'
import Dashboard from './components/admin/Dashboard.jsx'
import Admin from './components/admin/Admin.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Menu />} />
      <Route path="/booking" element={<BookingForm />} />
      
      <Route path="login" element={<Admin />} />
      
      <Route path="admin" element={<Layout />}>
        <Route index element={<Navigate to="dashboard" />} /> {/* Redirect to dashboard */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reservations" element={<Reservationlist />} />
        <Route path="orders" element={<Orderlist />} />
      </Route>
      
    </Route>
  )
);


function App() {
  return (
 
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;