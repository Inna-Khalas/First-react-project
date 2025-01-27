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
    <div>
      <h1>Welcome {user.name}</h1>
      <button type="button" onClick={onClick}>
        LogOut
      </button>
    </div>
  );
}

export default UserMenu;
