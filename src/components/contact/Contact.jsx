import PropTypes from "prop-types";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal"; // Assuming a Modal component exists.

const Contact = ({ name, number, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  const handleDelete = () => {
    onDelete();
    toggleModal();
  };

  return (
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
      <button onClick={toggleModal} className={s.btn}>
        Delete
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <p>Are you sure you want to delete this contact?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={toggleModal}>No</button>
        </Modal>
      )}
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;

// import "react";
// import PropTypes from "prop-types";
// import s from "./Contact.module.css";
// import { FaUser } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";

// const Contact = ({ name, number, onDelete }) => (
//   <div className={s.box}>
//     <ul className={s.ul}>
//       <li className={s.li}>
//         <FaUser />
//         {name}
//       </li>
//       <li className={s.li}>
//         <FaPhoneAlt />
//         {number}
//       </li>
//     </ul>
//     <button onClick={onDelete} className={s.btn}>
//       Delete
//     </button>
//   </div>
// );

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// export default Contact;
