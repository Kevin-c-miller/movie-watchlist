import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyUser } from './services/apiConfig/users';
import MovieContainer from './containers/MovieContainer';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Signup from './screens/Register/Signup';
import PageNotFound from './screens/404/PageNotFound';
import Nav from './components/Nav';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      console.log(user);
      setCurrentUser(user);
    };
    // getUser();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/movies/*" element={<MovieContainer />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
