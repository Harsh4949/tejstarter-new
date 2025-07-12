import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CollaborationPage from './pages/CollaborationPage';
import About from './components/About';
import Launchpad from './components/Launch';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import Homepage from './components/Home';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/collaboration" element={<CollaborationPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/launchpad" element={<Launchpad />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
