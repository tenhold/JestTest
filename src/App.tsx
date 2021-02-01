import React, { useState, useEffect } from 'react';
import { sum } from '../data/sum';
import { getUser } from '../data/http';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then((data: any) => setUser(data));
  }, []);
  return (
    <div>
      <h1>Hello World!</h1>
      <div>{user && <h3>name {user.username}</h3>}</div>
    </div>
  );
};

export default App;
