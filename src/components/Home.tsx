import React, { useState } from 'react';

const Home: React.FC<{}> = () => {
  const [text, setText] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const handleClick = () => {
    setMessage(text);
  };
  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        pattern="[0-9]*"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="名前を入力してください"
      />
      <button onClick={handleClick}>Button</button>
      {message && <h1>{message}さん！ようこそ！！</h1>}
    </div>
  );
};

export default Home;
