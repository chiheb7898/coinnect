import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SignUp} from './Components/SignUp/SignUp'
import {Pricing} from'./Components/Pricing/Pricing';
import {VerifAccount} from'./Components/verifaccount/verifaccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SignUp />} />
        <Route path="/pricing" exact element={<Pricing />} />
        <Route path="/verifaccount" exact element={<VerifAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
