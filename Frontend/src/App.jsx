import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formformat from './Components/Form/Formformat.jsx'
import Payment from './Components/Payment/Payment.jsx';
import Loginpage from './Components/LoginPage/LoginPage.jsx';
import Entrypage from './Components/Entrypage/Entrypage.jsx';
import Message from './Components/Message/Message.jsx';
const App = () => {
  return (
    <div>
    
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Entrypage/>} />
        <Route path="/Formformat" element={<Formformat />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Loginpage" element={<Loginpage />} />
        <Route path="/Message" element={<Message/>} />
       
       
        
      </Routes>
    </BrowserRouter>
    
    
    </div>
  )
}

export default App
