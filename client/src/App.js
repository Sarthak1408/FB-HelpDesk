import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Integration} from "./pages/Integration";
import {Disconnect} from "./pages/Disconnect";
import {Dashboard} from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/register"} element={<Register/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/integration"} element={<Integration/>}/>
          <Route path={"/disconnect"} element={<Disconnect/>}/>
          <Route path={"/dashboard"} element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
