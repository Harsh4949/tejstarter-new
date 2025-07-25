import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CollaborationPage from './pages/CollaborationPage';
import About from './components/About';
import Launchpad from './components/Launch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Stories from './pages/Stories';
import Homepage from './components/Home';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
        <main className="flex-grow pt-20 lg:pt-20">{/* Added padding for fixed header */}

     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collaboration" element={<CollaborationPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/launchpad" element={<Launchpad />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="*" element={<div style={{padding: '2rem', fontSize: '1.5rem', color: 'red'}}>404: Page not found</div>} />
      </Routes>

      </main>
      <Footer />
    </div>
  );
}

export default App;
