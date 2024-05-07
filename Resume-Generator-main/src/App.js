import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './screens/home';
import Home2 from './screens/home2';
import Resume from './Components/resume1';
import Resume2 from './Components/Resume2';
import Home_Screen from './screens/Home_Screen';
import Resume3 from './Components/Resume3';
import Resume6 from './Components/Resume6';
import Home6 from './screens/home6'

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home_Screen/>} />
         <Route path='/Resume/1' element={<Home/>} />
         <Route path='/resume' element={<Resume/>} />

         <Route path='/Resume/5' element={<Home2 />} />
         <Route path='/resume5' element={<Resume3 />} />
         <Route path='/Resume/6' element={<Home6/>} />
        
           
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
