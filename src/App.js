import React, {useState} from 'react';
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

  // when the page first loads, the about component will show,
  // since the about component shows whenever the current state is in start
  // or about. This is so that none of the tabs are highlighted when the
  // page first loads. From there the currentTab is decided in the Nav
  // component
  const [currentTab, setCurrentTab] = useState('Start');

  return (
    <div className='full-screen'>
      <Header
      currentTab = {currentTab}
      setCurrentTab = {setCurrentTab}></Header>
      <main>
        {/* conditional rendering of the components */}
        {/* see currenTab state comment. If state is about, or start.
        show about component */}
        {currentTab === 'About' && <About></About> ||
        currentTab === 'Start' && <About></About>} 
        {currentTab === 'Contact' && <Contact></Contact>}
        {currentTab === 'Projects' && <Portfolio currentTab = {currentTab}></Portfolio>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
