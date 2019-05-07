import React from 'react';

function FancyBorder(props) {
  return (
    <div className={`FancyBorder FancyBorder-${props.color}`}>
      {props.children}
    </div>
  );
}
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Hola!</h1>
      <p className="Dialog-message">Gracias por hacer este ejemplo.</p>
    </FancyBorder>
  );
}
function showSaludo() {
  return <WelcomeDialog />;
}

export default showSaludo;
