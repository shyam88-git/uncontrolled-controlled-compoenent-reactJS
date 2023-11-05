import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <React.Fragment>
      <pre>Hello {password}</pre>
      <input
        type="password"
        value={password}
        name="pass"
        onChange={handlePassword}
      />
    </React.Fragment>
  );
};

export default App;
