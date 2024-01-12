import './App.css';
import Invitation from './components/Invitation';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <>
    <Router>
        <Navbar/>        
        <Routes>
          <Route path='/' element={<UserForm />}></Route>
          <Route path="/invitation" element={<ProtectedRoutes><Invitation/></ProtectedRoutes>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
