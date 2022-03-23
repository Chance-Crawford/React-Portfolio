// import bootstrap. see React Notes import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// custom stylesheet
import './assets/css/style.css'
// components
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <div className='full-screen'>
      <Header></Header>
      <main>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
