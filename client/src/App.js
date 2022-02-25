import { Routes, Route } from 'react-router-dom';
import MovieContainer from './containers/MovieContainer';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Signup from './screens/Register/Signup';
import PageNotFound from './screens/404/PageNotFound';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <h1>Home</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/movies/*" element={<MovieContainer />} />
        <route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
