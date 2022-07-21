import PropTypes from 'prop-types';
import { BsFillPersonFill } from "react-icons/bs";
import css from './friendListItem.module.css'

const FriendListItem =({avatar, name, isOnline, id})=>{
    return(<li className={css.item} key={id}>
    
    {/* {isOnline?'status green':'status red'}> */}
    <img className="avatar" src={avatar} alt={name} width="48" />
    <div className={css.user}>
    <span className={css.status}><BsFillPersonFill color={isOnline?'green':'red'} className= {css.icon} size={30} /></span>
    <p className={css.name}>{name}</p>
    </div>
    
  </li>)
}

FriendListItem.propTypes = PropTypes.shape({

    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  });

  export default FriendListItem;