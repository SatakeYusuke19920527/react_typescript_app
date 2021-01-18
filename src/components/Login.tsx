import React, { useState } from 'react';
import { UserType } from '../types/UserType';

const Login: React.FC<UserType> = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Login</h1>
      <h2>{count}</h2>
      <button onClick={increment}>count up</button>
    </div>
  );
};

export default Login;
