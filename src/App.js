import './App.css';
import Create from './Create';
import UserAdd from './UserAdd';

import Nopage from './Nopage';
import Read from './Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from './Edit';


function App() {
  return (
  
   <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
          <Route  path="/users/add" element={<UserAdd />} />
          <Route  path="/users/edit/:id" element={<Edit />} />
          <Route path="/users/read/:id" element={<Read />} />
         
          <Route  path="/*" element={<Nopage />} />

        
      </Routes>
    </BrowserRouter>
    </div>
    
   
 
  );
}

export default App;
