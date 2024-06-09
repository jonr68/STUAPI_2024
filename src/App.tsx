import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Ships from "./Pages/Ships";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ships />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
