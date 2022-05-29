import FriendListItem from "./FriendItem";
import s from "./Friends.module.css";
import PropTypes from 'prop-types';

export default function FriendsList({ friends }) {
    return (
        <ul className={s.friendsList}>
            {friends.map(({ id, name, avatar, isOnline }) => (
                <li className={s.item} key={id}>
                    <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
                </li>
            ))}
        </ul>
    )
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
        })
    ),
};