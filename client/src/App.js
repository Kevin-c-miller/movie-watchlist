import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyUser } from './services/apiConfig/users';
import MovieContainer from './containers/MovieContainer/MovieContainer';
import UserContainer from './containers/UserContainer/UserContainer';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Signup from './screens/Register/Signup';
import PageNotFound from './screens/404/PageNotFound';
import Nav from './components/Navbar/Nav';
import UserAccount from './screens/UserAccount/UserAccount';
import Footer from './components/Footer/Footer';
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
    getUser();
  }, []);

  return (
    <div className="App">
      <Nav setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/register"
          element={<Signup setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/users/:id/my-account"
          element={<UserAccount currentUser={currentUser} />}
        />
        <Route
          path="/movies/*"
          element={<MovieContainer currentUser={currentUser} />}
        />
        <Route
          path="/users/*"
          element={<UserContainer currentUser={currentUser} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
