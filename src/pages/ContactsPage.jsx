import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectLoading, selectError } from "../redux/contacts/selectors";
import ContactForm from "../components/contactform/ContactForm";
import SearchBox from "../components/searchbox/SearchBox";
import ContactList from "../components/contactlist/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
