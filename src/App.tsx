import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from 'pages/Home';
import {Random} from 'pages/advice/Random';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/random' element={<Random/>}/>
      </Routes>
    </BrowserRouter>
  );
};
