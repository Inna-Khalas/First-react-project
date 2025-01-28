import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
  selectTotalContacts,
} from "../../redux/selectors";
import { BallTriangle } from "react-loader-spinner";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const totalContacts = useSelector(selectTotalContacts);
  const error = useSelector(selectError);

  if (isLoading) return <BallTriangle color="blue" width={50} height={50} />;

  if (error) return <p>Error: {error}</p>;

  if (totalContacts === 0) {
    return <p>You have no contacts yet. Please add a contact.</p>;
  }

  if (contacts.length === 0) {
    return <p>No contacts found</p>;
  }

  return (
    <div className="contact-list">
      <ul className="contacts-list">
        {contacts.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
