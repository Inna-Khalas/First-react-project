
import './FriendList.css';
import FriendListItem from './FriendListItem.jsx';

export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    );
}
