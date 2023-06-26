import { Outlet } from "react-router-dom";
import Navbar2 from "./Navbar2";


function Hooks() {
  return (
    <div className="App">
      
          <Navbar2 />
          <Outlet />      
    </div>
  );
}

export default Hooks;
