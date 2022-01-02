import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';


const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent