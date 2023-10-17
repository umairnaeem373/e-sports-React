
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './Components/header';
import Home from './Screens/Home';
import News from './Screens/news';
import Shop from './Screens/Shop';
import Special from './Screens/SpecialDeals';
// import Section1 from './Components/setion1';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/* <Route path='/home' element={<Home/>}></Route> */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/special' element={<Special/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
