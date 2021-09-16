import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import Slider from './components/slider';
import Services from './components/services';
import {Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
        <Navbar />
        <Slider />
        <About />
        <Services />
    </div>
  );
}

export default App;
