import { Landing } from './pages/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Search } from './component/Search/Search';
import { MovieDetail } from './component/MovieDetail';
function App() {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route exact path='/movie/:id' element={<MovieDetail/>}/>
      <Route exact path='/search/:keyword' element={<Search/>}/>
    </Routes>
  </Router>
    );
}

export default App;
