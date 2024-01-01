import React from 'react';
import './style.css';

function Badge({ name, handle, img }) {
  return (
    <div className="badge">
      <img alt={name} src={img} />
      <div>
        <h4>{name}</h4>
        <p>@{handle}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Badge
      name="DJ Rajkhowa"
      handle="dj_rajkhowa"
      img="https://avatars.githubusercontent.com/u/2480220?s=400&u=7737ef7a910c97a14a25f1ebac474d99fa467a02&v=4"
    />
  );
}
