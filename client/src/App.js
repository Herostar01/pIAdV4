
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import InjuryHelp from './screens/InjuryHelp';
import Evaluation from './screens/Evaluation';
import Redirect from './components/Redirect';


function App() {

  const url = "https://rana.law/"

  return (
    <div className="App">

      

      

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<InjuryHelp/>} />

          <Route path='/Evaluation' element={<Evaluation/>} />

          <Route path="/redirect" element={<Redirect url={ url } />} />

        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
