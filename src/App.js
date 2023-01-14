import Nav from './components/Nav'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About'

import Vacant from './components/Vacant'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">

      <Nav/>
      <About/>
      
      <Vacant/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
