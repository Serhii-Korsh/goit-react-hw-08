import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || number.trim() === "") {
      alert("Please fill in both fields.");
      return;
    }
    onAddContact({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter name"
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="text"
          value={number}
          onChange={handleNumberChange}
          placeholder="Enter phone number"
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        Add Contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
