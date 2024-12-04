import friends from "../friends.json";
import transaction from "../transactions.json";
import Profile from './Profile/Profile';
import userData from '../userData.json';
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <FriendList
        friends={friends} />

      <TransactionHistory
        type={transaction.type} />
    </>


  );
}

