import CssBaseline from '@mui/material/CssBaseline';
import Header from "./pages/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import Series from './pages/Series';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Movies from './pages/Movies';
import VideoPlayer from './pages/VideoPlayer';





function App() {
  return (
    <>
    <CssBaseline />
    <Router>
    <Header />
    

<Routes>
  <Route exact path='/'  element={<Home />} />
  <Route exact path='/Series'  element={<Series />} />
  <Route exact path='/About'  element={<About />} />
  <Route exact path='/Contacts'  element={<Contacts />} />
  <Route exact path='/Movies'  element={<Movies />} />
  <Route path="/player" element={<VideoPlayer />} />
</Routes>

</Router>
</>
  )
}

export default App;
