import './FriendList.css';

export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id} className="friend-item">
                    <img src={friend.avatar} alt="Avatar" className='friend-avatar' />
                    <p className="friend-name">{friend.name}</p>
                    <p className={`friend-status ${friend.isOnline ? "online" : "offline"}`}>
                        {friend.isOnline ? "Online" : "Offline"}
                    </p>
                </li>
            ))}
        </ul>
    );
}
