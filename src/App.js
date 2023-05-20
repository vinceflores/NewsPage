import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NewArticles from './Components/NewsArticle';
import {data} from './data.js'
import PopularArticle  from './Components/PopularArticle';
import Trending from './Components/Trending';
function App() {
  const article = data.articles 
  return (
    <div className="App font-inter flex justify-center flex-col items-center text-very_dark_blue dark:bg-very_dark_blue ">
        <Router> 

        <Navbar/> 
        <Routes>
          <Route path='/' element={ <Home/>} /> 
          {/* <Route path='/0' element={<Article/> } /> */}
          {
            article.new.map((i, index) => {
              return  <Route key={index} path={`/new${index}`} element={<NewArticles index={index}/> } />
            })
          }
          {
            article.popular.map((i, index) => {
              return <Route key={index} path={`/popular_${index}`} element={<PopularArticle index={index} /> } /> 
            })
          }
          <Route path='/trending' element={<Trending/> } /> 
         
        </Routes>

        </Router>
    </div>
  );
}

export default App;
