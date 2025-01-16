import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import SearchBar from "../SearchBar/SearchBar";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="contact-list">
      <SearchBar />
      {filteredContacts.length === 0 ? (
        <p>Нічого не знайдено</p>
      ) : (
        <ul className="contacts-list">
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
