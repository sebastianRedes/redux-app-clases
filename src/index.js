import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import {Provider} from "react-redux";
import {compose} from "redux";
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import reducer from "./reducers";

import reportWebVitals from './reportWebVitals';


const initialState={
  favoriteCharacters: [],
  sectionActive: "Characters",
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(logger)));



ReactDOM.render(
 <Provider store={store}>
   <App/>
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
