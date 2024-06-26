import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar/index.tsx';
import About from './components/About/index.tsx';
import Contact from './components/Contact/index.tsx';
import Blog from './components/Blog/index.tsx';
import FAQ from './components/FAQ/index.tsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
          <Route path='faq' element={<FAQ />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;
