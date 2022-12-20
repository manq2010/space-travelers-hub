import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from './features/Navbar/Navbar';

// Pages
import NotFoundPage from './pages/NotFoundPage';
import MissionPage from './pages/MissionPage';
import RocketPage from './pages/RocketPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route exact path="/" element={<RocketPage />} />
      <Route exact path="/missions" element={<MissionPage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
