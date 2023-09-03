import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Contact from './contact';
import Upload from './upload';
import Home from './home';
import Paper from './paper'
import Syllabus from './syllabus';
import './App.css';

function App(){
    return(
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/previous-paper' element={<Paper />} />
            <Route path='/syllabus' element={<Syllabus />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </>
    );
}
export default App;