import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Footer';
import Home from './components/Home';
import Work from './components/Work'
import Photoshop from './components/Photoshop';
import UiUx from './components/UiUx';
import WebProject from './components/WebProject';
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/photoshop' element={<Photoshop/>}/>
      <Route path='/uiux' element={<UiUx/>}/>
      <Route path='/web-project' element={<WebProject/>}/>
    </Routes>
  );
}

export default App;
