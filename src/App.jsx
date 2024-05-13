import { Outlet } from "react-router-dom";
import Navbar from "./Components/layout/navbar";

function App() {
  return (
    <div>
      <div className=" ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
