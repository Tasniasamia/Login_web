import { Outlet } from "react-router-dom";
// import Navbar from "./Components/layout/navbar";
import '/app.scss';
function App() {
  return (
    <div>
      <div >
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
