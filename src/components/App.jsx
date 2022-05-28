import Profile from "./Profile/Profile"
import user from "../dataFiles/user.json";
import Statistics from "./Statistics/Statistics";
import data from "../dataFiles/data.json"

function App() {
  return (
    <div
      style={{
        height: '90vh',
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
    </div>
  );
}

export default App;
