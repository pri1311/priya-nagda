import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import Home from './components/screens/Home';
import About from './components/screens/About';
import './styles/GlobalStyles.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/priya-nagda" element={<Home/>}></Route>
          <Route path="/priya-nagda/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
