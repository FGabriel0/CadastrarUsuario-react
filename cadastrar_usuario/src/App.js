import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//components
import Logo from "./components/Layouts/Logo";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import Main from "./components/pages/main";
import UserCard from "./components/user/UserCard";

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
        <Logo />
        <Navbar />  
        <Routes>      
          <Route path='/' element={<Main/>}/>
          <Route path='/user' element={<UserCard/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  
  );
}

export default App;
