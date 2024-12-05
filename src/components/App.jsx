import friends from "../friends.json";
import transactions from "../transactions.json";
import Profile from './Profile/Profile';
import userData from '../userData.json';
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <h1 className="app-title">Profile</h1>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <h1 className="app-title">Friend List</h1>
      <FriendList
        friends={friends} />

      <h1 className="app-title">Transaction History</h1>
      <TransactionHistory
        transactions={transactions} />
    </>
  );
}

