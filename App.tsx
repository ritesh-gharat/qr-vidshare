import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import UploadPage from './pages/UploadPage';
import WatchPage from './pages/WatchPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HashRouter>
          <Routes>
            <Route path="/" element={<UploadPage />} />
            <Route path="/watch/:publicId" element={<WatchPage />} />
          </Routes>
        </HashRouter>
      </main>
    </div>
  );
};

export default App;