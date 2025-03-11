
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import HomePage from './routes/homepage/HomePage.jsx';
import SigninPage from './routes/signInPage/SigninPage.jsx';
import SignUpPage from './routes/signUpPage/SignUpPage.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx';
import ChatPage from './routes/chatPage/ChatPage.jsx';


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in/*",
        element: <SigninPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);