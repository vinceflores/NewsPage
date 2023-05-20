import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Article from './Components/Article';

function App() {
  return (
    <div className="App font-inter flex justify-center flex-col items-center text-very_dark_blue ">
        <Router> 

        <Navbar/> 
        <Routes>
          <Route path='/' element={ <Home/>} /> 
          <Route path='/one' element={<Article/> } />
        </Routes>

        </Router>
    </div>
  );
}

export default App;
