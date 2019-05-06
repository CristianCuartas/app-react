import React, { Component } from 'react';

function MailBox(props) {
  const { unreadmsjs } = props;
  return (
    <div>
      <h1>Hola</h1>
      {unreadmsjs.length > 0 && (
        <h2>Tu tienes {unreadmsjs.length} mensajes sin leer.</h2>
      )}
    </div>
  );
}

const mensajes = ['R', 'E', 'A', 'C', 'T', 'React'];

function showMB() {
  return <MailBox unreadmsjs={mensajes} />;
}
export default showMB;
