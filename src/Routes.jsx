import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from './features/Navbar/Navbar';

// Pages
import NotFoundPage from './pages/NotFoundPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      {/* <Route exact path="/" element={<Homepage />} /> */}

    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
