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
    <div className="flex flex-col sm:flex-row items-center gap-3 p-4">
      <h1 className="text-lg text-gray-700 font-semibold">
        Welcome {user.name}
      </h1>
      <button
        type="button"
        onClick={onClick}
        className="btn btn-outline btn-sm "
      >
        LogOut
      </button>
    </div>
  );
}

export default UserMenu;
