import Create from "./components/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadPage from "./components/ReadPage";
import Edit from "./components/Edit";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ReadPage />}></Route>
          <Route exact path="/create" element={<Create/>}></Route>
          <Route exact path="/edit" element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
