import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics";
import FriendsList from "./FriendsList/Friends";
import TransactionHistory from "./Transactions/Transactions";

import user from "../dataFiles/user.json";
import data from "../dataFiles/data.json"
import friends from "../dataFiles/friends.json"
import transactions from "../dataFiles/transactions.json"



function App() {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
