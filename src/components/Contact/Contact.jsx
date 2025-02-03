import { useDispatch } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";
import { deleteContact } from "../../redux/contacts/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className="contact-item">
      <input type="checkbox" className="contact-checkbox" />
      <span className="contact-info">
        <span className="contact-name">{name}: </span>
        <span className="contact-number">{number}</span>
      </span>
      <button onClick={handleDelete} className="delete-button">
        <IoMdCloseCircle />
      </button>
    </li>
  );
};

export default Contact;
