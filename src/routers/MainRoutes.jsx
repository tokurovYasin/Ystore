import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// import { useAuth } from "../contexts/AuthContextProvider";
// import { ADMIN } from "../helpers/consts";
// import AdminPage from "../pages/AdminPage/AdminPage";

import DetailsPage from "../pages/DetailsPage/DetailsPage";

import HomePage from "../pages/HomePage/HomePage";
import Products from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs/AboutUs";
import Accessories from "../pages/Accessories/Accessories";
import Contacts from "../pages/Contacts/Contacts";
import OnCredit from "../pages/OnCredit/OnCredit";
import Guarantee from "../pages/Guarantee/Guarantee";
import Articles from "../pages/Articles/Articles";

const MainRoutes = () => {
  // const { user } = useAuth();
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/products", element: <Products />, id: 3 },
    { link: "/about", element: <AboutUs />, id: 2 },
    { link: "/accessories", element: <Accessories />, id: 4 },
    { link: "/contacts", element: <Contacts />, id: 8 },
    { link: "/details/:id", element: <DetailsPage />, id: 9 },
    { link: "/oncredit", element: <OnCredit />, id: 6 },
    { link: "/guarentee", element: <Guarantee />, id: 5 },
    { link: "/articles", element: <Articles />, id: 7 },
  ];

  // const PRIVATE_ROUTES = [
  //   { link: "/admin", element: <AdminPage />, id: 3 },
  //   // { link: "/edit/:id", element: <EditProductPage />, id: 5 },
  // ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}

        {/* {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null} */}
      </Routes>
    </>
  );
};

export default MainRoutes;
