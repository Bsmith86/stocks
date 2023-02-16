import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './pages/stocks'
import About from './pages/about'
import Stock from './pages/stock'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // yahoo main site
    children: [ // pages
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/stock/:symbol",
        element: <Stock />,
      },
    ]
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
