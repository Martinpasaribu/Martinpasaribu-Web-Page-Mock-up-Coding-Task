import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";

import  { Mock_up } from "./page/mock-up";

function App() {
  return (
    <div >
    
        <Routes>
          <Route path="/" element={<Mock_up/>}/>

        
        </Routes>


    </div>
  );
}

// <Route path="/cek" element={<Tampilan/>}/>

export default App;
