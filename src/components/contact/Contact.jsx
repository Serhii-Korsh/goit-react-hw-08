import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <p className={styles.contactInfo}>
        {name}: <span className={styles.contactNumber}>{number}</span>
      </p>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
