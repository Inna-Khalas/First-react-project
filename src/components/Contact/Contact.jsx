import { useDispatch } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";
import { deleteContact } from "../../redux/contacts/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className="item">
      <input type="checkbox" />
      <span>
        {name}: {number}
      </span>
      <button onClick={handleDelete} className="delete-button">
        <IoMdCloseCircle />
      </button>
    </li>
  );
};

export default Contact;
