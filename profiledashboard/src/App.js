import Account from './account/Account';
import './App.css';
import Profile from './components/Profile';
import ProfileAddress from './components/ProfileAddress';
import ProfileBar from './components/ProfileBar';
import ProfileDetails from './components/ProfileDetails';

function App() {
  return (
    <div className="App">
      <Profile/>
      <ProfileBar/>
      <ProfileDetails/>
      <ProfileAddress/>
      {/* <Account/> */}
    </div>
  );
}

export default App;
