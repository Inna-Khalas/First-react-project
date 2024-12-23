import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={s.item}>
      <input type="checkbox" />
      <span>
        {name}: {number}
      </span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Contact;
