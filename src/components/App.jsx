import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import contactDate from "../assets/contact.json";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const SAVED_CONTACTS = "contacts";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(SAVED_CONTACTS);
    return savedContacts ? JSON.parse(savedContacts) : contactDate;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(SAVED_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const duplicate = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (duplicate) {
      alert(`${newContact.name} вже є в контактах`);
      return;
    }

    const contactWithId = { ...newContact, id: nanoid() };
    setContacts((prev) => [contactWithId, ...prev]);
  };

  const deleteContacts = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filterContacts = () =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <h1>Register form:</h1>
      <ContactForm onRegister={addContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filterContacts()} onDelete={deleteContacts} />
    </>
  );
}
