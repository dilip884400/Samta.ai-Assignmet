import React from 'react';
import CountdownTimer from './Timer/Countdowntimer';
import UserInfo from './userInfo/UserInfo';
import './index.css'

const App = () => {
  return (
    <div className='main_container'>
      <CountdownTimer />
      <UserInfo />
    </div>
  );
};

export default App;
