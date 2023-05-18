import './App.css';
import {
  Route,
  Routes  
} from "react-router-dom";
import Navbar from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Work from "./pages/work";
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './components/navigation';
import Blog from './pages/blog';
import News from './pages/news';
import Career from './pages/career';
// import { PageTransitions } from '@14islands/react-page-transitions';

function App() {
  return (
    <>
      <ParallaxProvider>
        <Navbar />
        <Routes>
          <Route path="/projects/nmd" element={<Home />} />
          <Route path="/projects/nmd/about" element={<About />} />
          <Route path="/projects/nmd/work" element={<Work />} />
          <Route path="/projects/nmd/blog" element={<Blog />} />
          <Route path="/projects/nmd/news" element={<News />} />
          <Route path="/projects/nmd/career" element={<Career />} />
          <Route path="/projects/nmd/contact" element={<Contact />} />
          <Route path="/projects/nmd/navigation" element={<Navigation />} />
        </Routes>
      </ParallaxProvider>
    </>
  );
}


export default App;
