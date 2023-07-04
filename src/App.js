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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/navigation" element={<Navigation />} />
        </Routes>
      </ParallaxProvider>
    </>
  );
}


export default App;
