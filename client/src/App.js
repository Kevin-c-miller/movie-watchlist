import { Routes, Route } from 'react-router-dom';
import MovieContainer from './containers/MovieContainer/MovieContainer';
import PageNotFound from './screens/404/PageNotFound';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<MovieContainer />} />
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
