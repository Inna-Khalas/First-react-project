import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import ContactList from "./ContactList/ContactList";
import { useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Contacts</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
