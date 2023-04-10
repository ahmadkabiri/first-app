import Courses from "./components/Courses";
import About from "./components/About/About";
import MainCourse from "./components/MainCourse";
import Panel from "./components/Panel";
import Login from "./components/Login";
import Dashboard from './components/Dashboard'
import PrivateRoute from "./components/PrivateRoute";

let routes = [
  { path: "/courses", element: <Courses /> },
  { path: "/course/:courseID", element: <MainCourse /> },
  {
    path: "/about/*",
    element: <About />,
    children: [
      {
        path: "setting",
        element: <p style={{ textAlign: "center" }}>Setting</p>,
      },
      {
        path: "dashboard",
        element: <p style={{ textAlign: "center" }}>Dashboard</p>,
      },
    ],
  },
  // { path: "/login", element: <Login /> },
  // { path: "/panel", element:<PrivateRoute>  <Panel /> </PrivateRoute> },
  // { path: "/dashboard", element:<PrivateRoute>  <Dashboard /> </PrivateRoute> },
  { path: "/login", element: <Login /> },
  { path: "/*", element:<PrivateRoute/> , children : [
    {path: "panel" , element: <Panel/> },
    {path:"dashboard" , element : <Dashboard/>}
  ] },
  { path: "/dashboard", element:<PrivateRoute>  <Dashboard /> </PrivateRoute> },
];

export default routes;
