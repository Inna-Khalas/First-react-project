import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { logOut } from "../redux/auth/operations";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onClick = () => {
    dispatch(logOut());
  };

  return (
    <div className="flex items-center gap-4  p-4 ">
      <h1 className="text-lg text-neutral ">Welcome {user.name}</h1>
      <button type="button" onClick={onClick} className="btn btn-outline ">
        LogOut
      </button>
    </div>
  );
}

export default UserMenu;
