import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import Contact from "../contact/Contact";
import s from "./ContactList.module.css";
import toast from "react-hot-toast";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success("Contact deleted successfully!"))
      .catch((error) => toast.error(`Error: ${error.message}`));
  };

  if (loading) return <p>Loading...</p>;
  if (contacts.length === 0) return <p>No contacts found.</p>;

  return (
    <ul className={s.ul}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => handleDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

// import { useSelector, useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsOps";
// import { selectFilteredContacts } from "../../redux/contactsSlice";
// import Contact from "../contact/Contact";
// import s from "./ContactList.module.css";

// const ContactList = () => {
//   const contacts = useSelector(selectFilteredContacts);
//   const dispatch = useDispatch();

//   return (
//     <ul className={s.ul}>
//       {contacts.map((contact) => (
//         <li key={contact.id}>
//           <Contact
//             name={contact.name}
//             number={contact.number}
//             onDelete={() => dispatch(deleteContact(contact.id))}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;
