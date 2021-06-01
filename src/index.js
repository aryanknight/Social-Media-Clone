import React from "react";
import ReactDOM from "react-dom";
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import reducers from './Reducers/reducers';
import App from "./App";
import './index.css'

const rootElement = document.getElementById("root");
const store=createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , rootElement);
