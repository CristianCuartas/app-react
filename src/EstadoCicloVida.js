import React from 'react';

function Clock(props) {
  return (
    <div>
      <h1>Hola</h1>
      <h2>{props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
function sg() {
  return <Clock date={new Date()} />;
}
setInterval(sg, 1000);
export default sg;
