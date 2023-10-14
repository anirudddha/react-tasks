import './App.css';
import WordCount from './components/WordCounter';
import Calculator from './components/Calculator';
import ColorPicker from './components/ColorPicker';
import AgeCalculator from './components/AgeCalculator';
// import UserTable from './components/UserTable';
import Navbar from './components/Navbar';

import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import UserTable from './components/UserTable';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<WordCount/>}></Route>
            <Route exact path="/calulator" element={<Calculator/>} ></Route>
            <Route exact path="/colorpicker" element={<ColorPicker/>} ></Route>
            {/* <Route exact path="/signup" element={<UserTable />} ></Route> */}
            <Route exact path="/agecalculator" element={<AgeCalculator/>} ></Route>
          </Routes>
        </div>
      </BrowserRouter>
      {/* <WordCount/> */}
      {/* <Calculator/> */}
      {/* <ColorPicker/> */}
      {/* <AgeCalculator/> */}
      {/* <UserTable /> */}
    </div>
  );
}

export default App;
