import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import ContactList from "./ContactList/ContactList";
import { useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <h1 className="title">Contacts</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};

export default App;
