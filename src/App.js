import Main from "./Main";
import Display from "./DisplayAgain";
import Add from "./Add";
import Dashboard from "./Dashboard";
import Fbtable from "./Fbtable";
import Instatable from "./Instatable";
import Userposts from "./Userposts";
import Tiktok from "./Tiktok";
import Twitter from "./TwitterTable";
import Adminpost from "./Adminpost";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import PrivateRoutes from "./PrivaateRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  console.clear()
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route>
          <Route element={<PrivateRoutes />}>
            <Route path="Adminpost" element={<Adminpost />} exact></Route>
            <Route path="Dashboard" element={<Dashboard />} exact></Route>
            <Route path="/Twitter" element={<Twitter />} exact></Route>
            <Route path="/Facebook" element={<Fbtable />} exact></Route>
            <Route path="/Instagram" element={<Instatable />} exact></Route>
            <Route path="/Tiktok" element={<Tiktok />} exact></Route>
            <Route path="/Userposts" element={<Userposts />} exact></Route>
          </Route>
        </Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="Response" element={<Display />}></Route>
        <Route path="Report" element={<Display />}></Route>
        <Route path="Add" element={<Add />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;

