import { createBrowserRouter } from "react-router-dom";
import MyImagesComp from "../components/MyImagesComp";
import ParentComp from "../components/ParentComp";
import CssComp from "../components/CssComp";
import PageNotFound from "../Layout/PageNotFound";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateComp from "../Hooks/UseStateComp";
import UseEffectComp from "../Hooks/UseEffectComp";
import MainDashboardComp from "../Layout/MainDashboardComp";
import FormValidationComp from "../Layout/FormValidationComp";
import ProductDashboardComp from "../CRUD/ProductDashboardComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductEditComp from "../CRUD/ProductEditComp";
import MyCarousalComp from "../components/MyCarousalComp";
import LoginComp from '../Layout/LoginComp';

const router = createBrowserRouter([
  {path:"",element:<LoginComp/>},
  {path:"login",element:<LoginComp/>},
  {
    path: "maindashboard",
    element: <MainDashboardComp />,
    children: [
      // 2. default routing
      { path: "", element: <MyImagesComp /> },
      // 1.naming routing
      { path: "myimages", element: <MyImagesComp /> },
      //3. parameterize routing
      { path: "parent/:id", element: <ParentComp /> },
      { path: "parent", element: <ParentComp /> },
      { path: "mycss", element: <CssComp /> },
      {path:"formval",element:<FormValidationComp/>},
      {path:"productdash",element:<ProductDashboardComp/>},
      {path:"productadd",element:<ProductAddComp/>},
      {path:"productedit/:id",element:<ProductEditComp/>},
      {path:"carousal",element:<MyCarousalComp/>},
      //4.child routing
      {
        path: "hooks",
        element: <ReactHooksComp />,
        children: [
          { path: "usestate", element: <UseStateComp /> },
          { path: "useeffect", element: <UseEffectComp /> },
        ],
      },
    ],
  },

  //5. whild card routing
  { path: "*", element: <PageNotFound /> },
]);

export default router;
