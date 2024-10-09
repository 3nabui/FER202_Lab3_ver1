import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main';
import Detail from './components/Detail/Detail';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import {Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
          <Route path='/' element={<Main/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path="/news" element={<News />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
        <Route path="/about" element={<About />}> </Route>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
