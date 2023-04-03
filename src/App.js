import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Footer';
import Home from './components/Home';
import Work from './components/Work'
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
