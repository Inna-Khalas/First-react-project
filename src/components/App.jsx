import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import "../../src/index.css";
export default function App() {
  return (
    <div className="wrapper">
      <h1 className="title">Register form:</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}
