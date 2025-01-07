import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx"; //proba
import HomePage from "../pages/HomePage/HomePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import PrivateRoute from "../utils/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing user...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
