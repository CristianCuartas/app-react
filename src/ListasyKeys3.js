import React from 'react';

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {
    id: 1,
    title: 'Hola mundo',
    content: 'Bienvenido a las leccionesde React!'
  },
  { id: 2, title: 'Instalación', content: 'Tu puedes instalar React desde npm' }
];

function keyBrothers() {
  return <Blog posts={posts} />;
}
export default keyBrothers;
