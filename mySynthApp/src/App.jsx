// src/App.jsx

import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Synthesizer from './Synthesizer';

const App = () => {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleRegister = (user) => {
    setUser(user);
    setShowRegister(false);
  };

  return (
    <div>
      {user ? (
        <>
          <h2>Willkommen, {user.email}</h2>
          <Synthesizer user={user} />
        </>
      ) : (
        showRegister ? (
          <Register onRegister={handleRegister} />
        ) : (
          <Login onLogin={handleLogin} onNavigateToRegister={() => setShowRegister(true)} />
        )
      )}
    </div>
  );
};

export default App;
