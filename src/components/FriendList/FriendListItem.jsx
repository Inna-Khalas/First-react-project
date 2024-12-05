
export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className="friend-item" >
            <img src={avatar} alt={`${name} avatar`
            } width="48" className="friend-avatar" />
            <p className="friend-name" > {name} </p>
            < p className={`friend-status ${isOnline ? 'online' : 'offline'}`}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </li>
    );
}
