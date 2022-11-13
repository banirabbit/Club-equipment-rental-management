import logo from './logo.svg';
import './App.css';
import NormalLogin from './pages/LoginPage/normalLogin/NormalLogin';
import { Box } from '@mui/system';
import MainPage from './pages/mainPage';
import {BrowserRouter} from "react-router-dom";
import MyRoute from './Route/MyRoute';
function App() {
  return (
    <div class="app">
      <BrowserRouter>
        <MyRoute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
