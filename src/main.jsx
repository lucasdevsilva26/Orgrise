import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Settings from "./pages/Settings";
import Charts from "./pages/Charts";
import Inventory from "./pages/Inventory";
import Signon from "./pages/Signon";
import Customers from "./pages/Customers";

const themeDuration = " duration-1000! ";

const lightTheme = {
  background: ` bg-gray-100 ${themeDuration}`,
  frontground0: ` bg-white ${themeDuration} `,
  frontground1: ` bg-gray-200 ${themeDuration} `,
  frontground2: ` bg-gray-300 ${themeDuration} `,
  border: ` border-blue-500 ${themeDuration}`,
  title: ` text-blue-900 `,
  text: ` text-blue-800 ${themeDuration}`,
  buttonText: ` text-blue-600 ${themeDuration}`,
  buttonBg: ` bg-linear-to-r from-blue-400 to-blue-600 ${themeDuration}`,
  selection: ` bg-blue-200 `,
};
const darkTheme = {
  background: ` bg-gray-950 ${themeDuration}`,
  frontground0: "bg-gray-900",
  frontground1: ` bg-gray-800 ${themeDuration} `,
  frontground2: ` bg-gray-700 ${themeDuration} `,
  border: ` border-teal-400 ${themeDuration}`,
  title: ` text-white `,
  text: ` text-teal-100 ${themeDuration}`,
  buttonText: ` text-teal-200 ${themeDuration}`,
  buttonBg: ` bg-linear-to-r from-teal-400 to-teal-600 ${themeDuration}`,
  selection: ` bg-gray-800 `,
};

const browserTheme = !window.matchMedia("(prefers-color-scheme: dark").matches;

export const Global = {
  theme: browserTheme,
  colors: browserTheme ? lightTheme : darkTheme,
  oldTheme: lightTheme,
  darkColors: darkTheme,
};

if (!localStorage.getItem("logged")) {
  localStorage.setItem("logged", false);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/content",
    element: <Content></Content>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signon",
    element: <Signon></Signon>,
  },
  {
    path: "/landing",
    element: <Landing></Landing>,
  },
  {
    path: "/charts",
    element: <Charts></Charts>,
  },
  {
    path: "/inventory",
    element: <Inventory></Inventory>,
  },
  {
    path: "/customers",
    element: <Customers></Customers>,
  },
  {
    path: "/settings",
    element: <Settings></Settings>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
