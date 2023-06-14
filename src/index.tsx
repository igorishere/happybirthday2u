import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HappyHappyHappyBirthday from './HappyHappyHappyBirthday'; 
import App from './App'; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"happybirthday2you",
    element: <HappyHappyHappyBirthday />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); 
