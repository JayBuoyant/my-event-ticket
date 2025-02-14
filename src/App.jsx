import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './components/Home';
import Header from './components/Header';
import AttendeeDetails from './components/AttendeeDetails';
import TicketDetails from './components/TicketDetails';
import FooterButtons from './components/FooterButton';


const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#02191d',
      padding: '112px 0',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        maxWidth: '800px',
        backgroundColor: '#041e23',
        borderRadius: '40px',
        padding: '48px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      }}>
        <Header/>
        <BrowserRouter basename='comforting-tiramisu-01d78b.netlify.app/' >
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/AttendeeDetails" element={<AttendeeDetails/>}/>
            <Route path = "/TicketDetails" element={<TicketDetails/>}/>
          </Routes>
        </BrowserRouter>
        {/* Add other components here as needed */}
      </div>
    </div>
  );
};

export default App;

