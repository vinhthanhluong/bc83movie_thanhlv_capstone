import { Route } from "react-router-dom";
import HomeTemplate from "./../pages/HomeTemplate";
import HomePage from "./../pages/HomeTemplate/HomePage";
import MovieDetailPage from "./../pages/HomeTemplate/MovieDetailPage";
import BookTicketPage from "./../pages/HomeTemplate/BookTicketPage";
import Login from "./../pages/HomeTemplate/Login";
import Register from "./../pages/HomeTemplate/Register";

import AdminTemplate from "./../pages/AdminTemplate";
import MovieManagement from "./../pages/AdminTemplate/MovieManagement";
import AddMovies from "./../pages/AdminTemplate/AddMovies";
import UserManagement from "./../pages/AdminTemplate/UserManagement";
import AddUser from "./../pages/AdminTemplate/AddUser";
import AuthPage from "./../pages/AdminTemplate/AuthPage";

const router = [
  {
    path: "",
    element: HomeTemplate,
    nested: [
      { path: "", element: HomePage },
      { path: "movie-detail/:movieID", element: MovieDetailPage },
      { path: "book", element: BookTicketPage },
      { path: "login", element: Login },
      { path: "register", element: Register },
    ],
  },
  {
    path: "admin",
    element: AdminTemplate,
    nested: [
      { path: "movie-management", element: MovieManagement },
      { path: "add-movie", element: AddMovies },
      { path: "user-management", element: UserManagement },
      { path: "add-user", element: AddUser },
    ],
  },
  { path: "auth", element: AuthPage },
];

export const renderRouter = () => {
  return router.map((route, index) => {
    if (route.nested) {
      return (
        <Route key={index} path={route.path} element={<route.element />}>
          {route.nested.map((r, i) => {
            return <Route key={i} path={r.path} element={<r.element />} />;
          })}
        </Route>
      );
    } else {
      return <Route key={index} path={route.path} element={<route.element />} />;
    }
  });
};
