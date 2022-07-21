import Profile from '../Profile/profile';
import user from 'data/user.json'
import Statistics from '../Statistics/statistics';
import data from 'data/data.json'
import FriendList from '../friendList/friendList';
import friends from 'data/friends.json'
import Transactions from '../transactions/transactions';
import transactions from 'data/transactions.json'
import css from './App.module.css'


export const App = () => {
  return (
    <div className={css.container}
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile  username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>

      <Statistics data={data}/>
      <FriendList friends={friends}/>
      <Transactions transactions={transactions}/>
    </div>
  );
};
