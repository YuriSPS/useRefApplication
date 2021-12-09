import React from 'react';

const App = () => {
  const video = React.useRef();

  return (
    <div ref={video}>Teste</div>
  );
};

export default App;
