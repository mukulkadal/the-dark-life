import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./pages/Navigation";
import Forms from "./components/Forms";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={ <Forms/>}/>
      <Route path="/navigation" element={ <Navigation/>}/>

    </Routes>
    </BrowserRouter>

     


    </>
  );
}

export default App;
