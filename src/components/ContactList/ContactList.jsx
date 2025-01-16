import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import SearchBar from "../SearchBar/SearchBar";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items) || [];
  const filter = useSelector((state) => state.filters.name) || "";

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
