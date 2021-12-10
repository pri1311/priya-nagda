import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/common/NavBar';
import './styles/GlobalStyles.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>

      </BrowserRouter>
    </div>
  );
}

export default App;
