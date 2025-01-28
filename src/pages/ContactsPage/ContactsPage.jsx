import { BallTriangle } from "react-loader-spinner";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { selectIsLoading } from "../../redux/selectors";

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your contacts:</h1>
      <ContactForm />
      <SearchBar />
      {isLoading ? <BallTriangle /> : <ContactList />}
    </div>
  );
}

export default ContactsPage;
