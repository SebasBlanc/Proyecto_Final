import logo from './logo.svg';
import './App.css';
import Menu from './misc/Menu';
import Footer from './misc/Footer';
import Main from './misc/Main';
import ProductoLista from './productos/ProductoLista';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <div
        className="container"
      >
       <Menu/>
      </div>

      <div
        className="container"
      >
        <Main/>
      </div>


      <div
        className="container"
      >
       <Footer/>
      </div>
    </div>
    

  );
}

export default App;
