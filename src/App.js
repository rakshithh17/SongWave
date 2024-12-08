// src/App.js
import React from 'react';
import HomePage from './pages/homepage/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import CategoryPage from './pages/homepage/CategoryPage';
import Electronic from './pages/genres/Electronic';
import Rock from './pages/genres/Rock';
import Jazz from './pages/genres/Jazz';
import Disco from './pages/genres/Disco';
import Melody from './pages/genres/Melody';
import RythmandBlues from './pages/genres/RythmandBlues';
import Rap from './pages/genres/Rap';
import Pop from './pages/genres/Pop';
import Telugu from './pages/languages/Telugu';
import Hindi from './pages/languages/Hindi';
import English from './pages/languages/English';
import Tamil from './pages/languages/Tamil';
import Kannada from './pages/languages/Kannada';
import Malayalam from './pages/languages/Malayalam';
import Romantic from './pages/moods/Romantic';
import Sad from './pages/moods/Sad';
import Feelgood from './pages/moods/Feelgood';
import Relaxed from './pages/moods/Relaxed';
import Dance from './pages/moods/Dance';
import Devotional from './pages/moods/Devotional';
import Favourites from './pages/Favourites';
import SearchBar from './components/search/SearchBar';
import SongPage from './pages/SongPage';
import { AuthProvider } from './pages/homepage/AuthContext';





const App = () => {
  
  return (
    <Router>
      <AuthProvider>
      <Header />
          <Routes>
        <Route exact path="/"  element={<HomePage/>}/>
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/login" element={<LogIn/>} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/rock" element={<Rock />} />
        <Route path="/jazz" element={<Jazz />} />
        <Route path="/disco" element={<Disco />} />
        <Route path="/melody" element={<Melody />} />
        <Route path="/rythmandblues" element={<RythmandBlues />} />
        <Route path="/rap" element={<Rap />} />
        <Route path="/pop" element={<Pop />} />
        <Route path="/category/telugu" element={<Telugu />} />
        <Route path="/category/hindi" element={<Hindi />} />
        <Route path="/category/english" element={<English />} />
        <Route path="/category/tamil" element={<Tamil />} />
        <Route path="/category/kannada" element={<Kannada />} />
        <Route path="/category/malayalam" element={<Malayalam />} />
        <Route path="/category/romantic" element={<Romantic />} />
        <Route path="/category/sad" element={<Sad />} />
        <Route path="/category/feelgood" element={<Feelgood />} />
        <Route path="/category/relaxed" element={<Relaxed />} />
        <Route path="/category/dance" element={<Dance />} />
        <Route path="/category/devotional" element={<Devotional />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/search" element={<SearchBar/>} />
        <Route path="/song/:trackId" element={<SongPage />} />
        </Routes>
        </AuthProvider>
    </Router>
    
        
  );
};

export default App;
