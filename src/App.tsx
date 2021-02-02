import React, { useState, useEffect } from 'react';
import { getUser } from '../data/http';
import { company, user } from 'getUsers';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then((data: user) => setUser(data));
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <div>{!user && <h1>Loading...</h1>}</div>
      {user && (
        <div>
          <h3>username: {user.username}</h3>
          <h3>name: {user.name}</h3>
          <h3>email: {user.email}</h3>
        </div>
      )}
    </div>
  );
};

export default App;
