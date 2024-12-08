import "react";
import PropTypes from "prop-types";
import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, onDelete }) => (
  <div className={s.box}>
    <ul className={s.ul}>
      <li className={s.li}>
        <FaUser />
        {name}
      </li>
      <li className={s.li}>
        <FaPhoneAlt />
        {number}
      </li>
    </ul>
    <button onClick={onDelete} className={s.btn}>
      Delete
    </button>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
