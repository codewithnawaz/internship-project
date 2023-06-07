import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DataList from './components/DataList';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DataList/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
