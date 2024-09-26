import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Common from "./component/Common";
import Time from "./component/Time";
import Network from "./component/network";
import Product from "./component/product"; 
import { Link } from "react-router-dom";
import Menu from "./component/Menu";
function App() {
  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<Menu />} />
         <Route path="/network" element={<Network />} />
          <Route path="/time" element={<Time />} />
          <Route path="/common" element={<Common />} />
          <Route path="/product" element={<Product />} />
        </Routes>
     

 </Router>
    </>
  );
}

export default App;

