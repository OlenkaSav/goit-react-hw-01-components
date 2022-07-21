import PropTypes from 'prop-types';
import FriendListItem from './friendListItem/friendListItem';
import css from './friendList.module.css'

const FriendList = ({friends})=>{
    return (<ul className={css.friendList}>
      {friends.map(({avatar, name, isOnline, id})=>(
        <FriendListItem 
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
        />
      ))
   
   }
  </ul>)}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        }))}

export default FriendList;
