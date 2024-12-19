import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminDashboard } from './pages/AdminDashboard';
import { CreateToken } from './pages/CreateToken';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/create-token" element={<CreateToken />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;