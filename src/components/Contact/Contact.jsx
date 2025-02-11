import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { RiContactsFill } from "react-icons/ri";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <tbody>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="">
                <RiContactsFill width={80} height={80} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{number}</td>
        <th>
          <button onClick={handleDelete} className="btn btn-ghost btn-xs ">
            delete
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default Contact;
