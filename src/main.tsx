import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import App from './App'
import './index.css'
import LandingPage from './LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LandingPage />
    ),
  },
  // {
  //   path: "/editor",
  //   element: (<App />)
  // },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);