import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import SearchBar from "../SearchBar/SearchBar";
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/selectors";
import { BallTriangle } from "react-loader-spinner";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) return <BallTriangle color="blue" width={50} height={50} />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="contact-list">
      <SearchBar />
      {contacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        <ul className="contacts-list">
          {contacts.map((contact) => (
            <Contact key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
