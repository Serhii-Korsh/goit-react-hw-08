import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import Contact from "../contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts
        .filter(
          (contact) => contact && contact.id && contact.name && contact.number
        )
        .map(({ id, name, number }) => (
          <li key={id} className={styles.contactItem}>
            <Contact
              id={id}
              name={name}
              number={number}
              onDelete={() => onDeleteContact(id)}
            />
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
