import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{ background: "red" }}>
      <div className="container1 ">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
