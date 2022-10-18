import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home.jsx';
import Characters from './components/Characters'
import Isles from './components/Isles'
import Summaries from './components/Summaries'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  }, 
  {
    path: "/isles",
    element: <Isles />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/summaries",
    element: <Summaries />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
