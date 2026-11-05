import './App.css';
import Header from './components/utils/Header.js';
import Footer from './components/utils/Footer.js'
import Home from './components/home/Home.js';
import AdvancedJS from './components/AdvancedJS.js';
import FAQs from './components/FAQs.js';
import Bookings from './components/Bookings.js';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  // States
  // Data
  // Functions and methods

  // UI
  return (
    <>
      <HashRouter>
        <Header/>
        <main className='overflow-hidden'>
          {/* Different views, header & footer stay the same */}
          <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/advancedjs" element={<AdvancedJS/>} />
            <Route path="/faqs" element={<FAQs/>} />
            <Route path="/bookings" element={<Bookings/>} />
          </Routes>
        </main>
        <Footer/>
      </HashRouter>


    </>
  );
}

export default App;
