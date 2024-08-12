import './App.css'
import Home from './components/screens/home/Home.jsx'
import Footer from './components/ui/Footer/Footer.jsx'
import Header from './components/ui/Header/Header.jsx'

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Footer/>
    </div>
  );
}

export default App;
