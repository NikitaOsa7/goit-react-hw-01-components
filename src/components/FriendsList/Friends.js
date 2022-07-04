import FriendListItem from "./FriendItem";
import s from "./Friends.module.css";
import PropTypes from 'prop-types';

export default function FriendsList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li className={s.item} key={id}>
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
                </li>
            ))}
        </ul>
    )
}



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