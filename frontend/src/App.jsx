import './App.css';
import Header from './components/header/header';
import Sign_in from './components/sign_in/sign_in';
import Home from './components/home/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign_in" element={<Sign_in />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
