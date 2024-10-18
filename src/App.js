
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/header/Header';
import Product from './components/products/product';




function App() {
  return (
    <div className="App">
      < Header />
   < Product/>
   
    </div>
  );
}

export default App;
