// src/routes/AppRouter.jsx
import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import { Home, About, Profile, DetailLayout, SearchLayout } from "../pages";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='profile' element={<Profile />} />
        <Route path='/detail/:name' element={<DetailLayout />} />
        <Route path='/search/:query' element={<SearchLayout />} />
      </Routes>
    </>
  );
};

export default AppRouter;
