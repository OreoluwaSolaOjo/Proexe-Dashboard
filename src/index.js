import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './redux/root-reducer';
import { loadUsers } from './redux/actions';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const saveState = (state) => {
  if (state.favorites.length !== 0) {
    localStorage.setItem("state", JSON.stringify(state));
  }
};

const getState = () => {
  try {
    const s = localStorage.getItem("state");

    if (s === null) return undefined;
    return JSON.parse(s);
  } catch (e) {
    return undefined;
  }
};
const initialState = getState();
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
store.dispatch(loadUsers());
store.subscribe(() => {
  saveState({
    favorites: store.getState().favorites
  })
})
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
