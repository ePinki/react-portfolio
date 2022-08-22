import './scss/app.scss'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
    </Routes>
  );
}

export default App;
