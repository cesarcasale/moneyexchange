import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import MoneyExchangePage from './MoneyExchangePage/MoneyExchangePage';
import './App.css';
import { AppContext } from "./shared/AppContext";
import { useState } from "react";



function App() {
    const [calc, setCalc] = useState("");

  return (
    <Router>
    <AppContext.Provider value={{ calc, setCalc}}>

    <div className="App">
      <header className="App-header">
        <Routes>
            <Route path="/" element={<MoneyExchangePage/>}/>
        </Routes>
      </header>
    </div>
    </AppContext.Provider>
    </Router>
  );
}

export default App;
