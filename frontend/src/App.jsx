import './App.css';
import Header from './components/header/header';
import Sign_in from './components/sign_in/sign_in';
import Sign_up from './components/sign_up/sign_up';
import Home from './components/home/home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CookiesProvider } from 'react-cookie';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sign_in" element={<Sign_in />}></Route>
            <Route path="/sign_up" element={<Sign_up />}></Route>
          </Routes>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
