import React from 'react';

function Content() {
  return (
      <div>
        <h1>Mi primer sitio con React JS</h1>
        <p>{require("../data/articulo.js").texto}</p>
        <img src="https://placeimg.com/500/240/nature"></img>
      </div>
    );
}

export default Content;