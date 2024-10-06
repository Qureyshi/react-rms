import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu.jsx'

import Reservation from './components/Reservation.jsx'

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
import Cart from './components/Cart.jsx'
import MenuManager from './components/admin/MenuManger.jsx'
import Inventory from './components/admin/Inventory.jsx'
import LoginForm from './components/LoginForm.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Menu />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/loginform" element={<LoginForm />} />
      <Route path="adminlogin" element={<Admin />} />
      
      <Route path="admin" element={<Layout />}>
        <Route index element={<Navigate to="dashboard" />} /> {/* Redirect to dashboard */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reservations" element={<Reservationlist />} />
        <Route path="orders" element={<Orderlist />} />
        <Route path="menu" element={<MenuManager />} />
        <Route path="inventory" element={<Inventory />} />
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