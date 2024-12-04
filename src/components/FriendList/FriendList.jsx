export default function FriendList({ friends }) {
    return (
        <ul>
            {friends.map(friend => (
                <li key={friend.id}>
                    <img src={friend.avatar} alt="Avatar" width="48" />
                    <p>{friend.name}</p>
                    <p>{friend.isOnline ? "Online" : "Offline"}</p>
                </li>
            ))}
        </ul>
    );
}
