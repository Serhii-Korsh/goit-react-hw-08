import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" className={s.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={s.link}>
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;