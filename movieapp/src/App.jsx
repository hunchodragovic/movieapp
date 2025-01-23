import Header from "./components/Header";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Add from "./components/Add";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import ContextProvider from "./components/context/GlobalContext";
function App() {
  return (
    <>
      <Router>
        <ContextProvider>
        <Header />
        <Routes>
        <Route path="/" element={<Watchlist/>}/>
        <Route path="/watched" element={<Watched/>}/>
        <Route path="/add" element={<Add/>}/>
        </Routes>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
