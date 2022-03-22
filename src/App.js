// import bootstrap. see React Notes import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// custom stylesheet
import './assets/css/style.css'
// components
import Header from './components/Header';
import About from './components/About';


function App() {
  return (
    <div className='full-screen'>
      <Header></Header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
