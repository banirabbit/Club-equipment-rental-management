import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const theme = createTheme({
  palette: {
    type: "light",
    Shortcut: {
      main: "#424242",
    },
    primary: {
      main: "#154AB6",
      light: "#56ade8",
      dark: "#113b92",
    },
    secondary: {
      main: "#131f45",
      light: "#3f4671",
      dark: "#00001f",
    },
    error: {
      main: "#a94442",
      light: "#df736d",
      dark: "#75131b",
    },
    warning: {
      main: "#f5cb5c",
      light: "#fffe8c",
      dark: "#bf9a2b",
    },
    info: {
      main: "#007eb6",
      light: "#56ade8",
      dark: "#005286",
    },
    success: {
      main: "#3c763d",
      light: "#6aa569",
      dark: "#094a14",
    },
    text: {
      primary: "#484848",
      secondary: "#727272",
    },
    indigo: {
      main: "#131F45",
    },
    lightBlue: {
      main: "#007EB6",
      contrastText: "#fff",
    },
    darkBlue: {
      main: "#1B5BA0",
      contrastText: "#fff",
    },
    secondeBlue: {
      main: "#56ADE8",
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
    },
    red: {
      main: "#dd5b5b",
    },
    Grey700: {
      main: "#3B3B3B",
      contrastText: "#fff",
    },
    Gray700: {
      // will replace `grey` by gray
      main: "#3B3B3B",
      contrastText: "#fff",
    },
    Gray300: {
      main: "#BCC5CF",
    },
    Gray500: {
      main: "#596A7C",
    },
    Grey600: {
      main: "#262E35",
    },
    Gray600: {
      // will replace `grey` by gray
      main: "#262E35",
    },
    Gray200: {
      main: "#DFE4E8",
    },
    Gray100: {
      main: "#F1F3F5",
    },
    grayBlue: {
      main: "#E3E8F2",
      contrastText: "#505050",
    },
    wileyBlue2: {
      main: "#264ab7",
      contrastText: "#fff",
    },
    wileyGrey3: {
      main: "#828282",
    },
    bg: {
      main: "#F3F4F8",
    },
    ActiveChip: {
      main: "#D7F1EE",
      contrastText: "#0D6A61",
    },
    LockedChip: {
      main: "#FFF0DD",
      contrastText: "#854300",
    },
    InactiveChip: {
      main: "#f1f3f5",
      contrastText: "#596A7C",
    },
    UserPopHead: {
      main: "#113161",
      contrastText: "#FFFFFF",
    },
    
  },
  typography: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#D9D9D9",
    opacity: "0.7",
    borderRadius: "10px",
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
export default store;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

