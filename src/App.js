import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Popular from './pages/Popular';
import Add from './pages/Add';
import Layout from './Layouts/Layout';
import { useState } from 'react';
import DataMovie from './utils/constants/DataMovie';

function App() {

  const [ data, setItem ] = useState(DataMovie)

  return (
    <Layout>
    <Routes>
      <Route path='/' element={<Home item={data} setItem={setItem}/>} />
      <Route path='/popular' element={<Popular />} />
      <Route path='/add' element={<Add item={data} setItem={setItem}/>} />
    </Routes>
    </Layout>
  );
}

export default App;
