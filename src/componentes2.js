import React from 'react';

const Welcome = props => {
  return <h1>Hola, {props.name}</h1>;
};

function App() {
  const a = <Welcome name="Cristian" />;
  const b = <Welcome name="Jose" />;
  const c = <Welcome name="Carlos" />;
  return (
    <div>
      {' '}
      {a}
      {b}
      {c}{' '}
    </div>
  );
}

export default App;
