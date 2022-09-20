import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProduct } from './actions/postProduct';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css';
import SideBar from './components/SideBar/SideBar';
import AdminCartPage from './Pages/AdminCartPage';
import Footer from './components/Footer/Footer';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AdminCartPage/>}/>
        </Routes>
      </Router>
      {/* <SideBar/> */}
      
      <Footer/>
    </div>
  );
}

export default App;
