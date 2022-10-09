import './scss/app.scss'
import {
  Routes,
  Route,
} from "react-router-dom";

import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Projectpage from './pages/Projectpage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/projects' element={<Projectpage/>}/>
    </Routes>
  );
}

export default App;
