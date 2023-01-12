import Nav from './components/Nav'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About'
import Accordion from './components/Accordion'
import Vacant from './components/Vacant'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">

      <Nav/>
      <About/>
      <Accordion/>
      <Vacant/>
      <Contact/>
      
    </div>
  );
}

export default App;
