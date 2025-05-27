import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navigation/NavBar.jsx';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product/:prodId" element={<ProductDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;