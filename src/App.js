import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hotel from "./pages/hotels/Hotel";
import Home from "./pages/home/Home";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/hotels" element={<List/>} />
         <Route path="/hotel" element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
       
  );
}

export default App;
