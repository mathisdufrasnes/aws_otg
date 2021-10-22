import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './components/MainPage';
import {store} from './store';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import ScrollButton from "./components/ScrollTop";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <MainPage/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);