
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Contacts from './Contacts';
import Home from './Home';
import AboutProduct from './AboutProduct';

function App() {
  
  return (
    
    <Router>
      <nav>
        <Link to="/" className='link'>Shop</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/contacts" className='link'>Contact Us</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path="/about/:title" element={<AboutProduct/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
