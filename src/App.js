import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Catalogue from './Pages/Catalogue';
import Fashion from './Pages/Fashion';
import Faviroid from './Pages/Faviroid';
import Lifestyle from './Pages/Lifestyle';
import Loginpage from './Pages/Loginpage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/catogue' element={<Catalogue/>}/>
          <Route path='/fashion' element={<Fashion/>}/>
          <Route path='/favioret' element={<Faviroid/>}/>
          <Route path='/lifestyle' element={<Lifestyle/>}/>
          <Route path='/login' element={<Loginpage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </>
  );
}

export default App;
