import './Profile.css';

export default function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
    return (
        <div className='profile-account'>
            <div className='profile-container'>
                <img className='profile-avatar'
                    src={avatar}
                    alt="User avatar"
                />
                <p className='profile-username'>{username}</p>
                <p className='profile-tag'>@{tag}</p>
                <p className='profile-location'>{location}</p>
            </div>

            <ul className='profile-list'>
                <li className='profile-item'>
                    <span className='profile-text'>Followers</span>
                    <span className='profile-textb'>{followers}</span>
                </li>
                <li className='profile-item'>
                    <span className='profile-text'>Views</span>
                    <span className='profile-textb'>{views}</span>
                </li>
                <li className='profile-item'>
                    <span className='profile-text'>Likes</span>
                    <span className='profile-textb'>{likes}</span>
                </li>
            </ul>
        </div>

    )
}

