import React, { useState } from "react";

const App = () => {
  const [Liked, setLiked] = useState(false);
  const clicked = () => {
    setLiked(true);
  };
  return Liked ? (
    <h1> Liked the button</h1>
  ) : (
    <button id="bt" onClick={clicked}>
      Like
    </button>
  );
};

export default App;
