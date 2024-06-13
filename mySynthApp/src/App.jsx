import React, { useState } from 'react';
import Login from './Login';
import Synthesizer from './Synthesizer';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <div>
      {user ? (
        <Synthesizer user={user} />
      ) : (
        <>
          <Login onLogin={handleLogin} />
          <Synthesizer user={null} />
        </>
      )}
    </div>
  );
};

export default App;