import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Main1 from './components/Main1';
import Introduce from "./components/Introduce";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from './components/Footer';
import Dark from './components/Dark';

function App() {
  return (
    <BrowserRouter>
    <div className="bg-red-100 min-h-screen">
      <main>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Dark/>} /> */}
          <Route path='/' element={<Main1 />} />
          <Route path='/Introduce' element={<Introduce />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/ContactMe' element={<ContactMe />} />
        </Routes>
        <Footer />
      </main>
    </div>
    </BrowserRouter>

  );
}

export default App;
