
import './App.css';
import Contact from './Contact';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route exact path='/Contact' element ={<Contact/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
