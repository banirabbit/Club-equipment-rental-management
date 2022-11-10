import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import NormalLogin from './pages/LoginPage/normalLogin/NormalLogin';
import { Box } from '@mui/system';
function App() {
  return (
    <div class="app">
      <NormalLogin>
        
      </NormalLogin>
    </div>
  );
}

export default App;
