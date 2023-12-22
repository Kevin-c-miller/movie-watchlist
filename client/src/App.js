import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyUser } from './services/apiConfig/users';
import MovieContainer from './containers/MovieContainer/MovieContainer';
import UserContainer from './containers/UserContainer/UserContainer';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Signup from './screens/Register/Signup';
import PageNotFound from './screens/404/PageNotFound';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const getUser = async () => {
  //     const user = await verifyUser();
  //     setCurrentUser(user);
  //   };
  //   getUser();
  // }, []);

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
      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
