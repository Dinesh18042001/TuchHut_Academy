import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App";
// import ApplyNowPage from "./ApplyNowPage/ApplyNowPage";
import { ViewProgram } from "./component/ViewProgram/ViewProgram";

const router = createBrowserRouter([
  {
    // it renders this element
    element: <Outlet />,
    children: [
      // { path: "/applynow", element: <ApplyNowPage /> },
      { path: "/viewpragrem", element: <ViewProgram /> },
      { path: "/", element: <App /> }
    ],

    // when the URL matches this segment
    path: "/"
  }
]);

export const RouteProvider = () => <RouterProvider router={router} />;
