import React from 'react';

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <div>
      <p style={{ width: '100%', background: 'red' }}>{notificacao && notificacao}</p>
      <h1>Total de produtos no carrinho: {carrinho}</h1>
      <button onClick={handleClick}>Adicionar ao Carrinho</button>
    </div> 
  );
};

export default App;
