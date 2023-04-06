import {BrowserRouter, Routes, Route} from'react-router-dom';
import Main from './pages/Main';
import Worldcup from './pages/Worldcup';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/worldcup' element={<Worldcup/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
