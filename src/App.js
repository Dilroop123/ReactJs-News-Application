import React, { useState } from 'react';

import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import News from './components/main/index'


function App() {

  const [newUserName, setNewUserName] = useState('donaldTrump');

  const newUser = (name) => {
    //console.log(name);
    setNewUserName(name)
  }

  return (
    <div className="App">
      <Header />
      <News newUserName={newUserName} />
      <Footer setnewsUser={newUser} />
    </div>
  );
}

export default App;
