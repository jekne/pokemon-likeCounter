// src/components/LikeCounter.js
import { useState } from "react"; // <- note the added import of useState
import { useEffect } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  const [heart, setHeart] = useState(true);

  // You can increment directly at the button or use the formula above
  const increment = () => {
    console.log("YES I HAVE BEEN CLICKED");
    set_numLikes(numLikes + 1);
  };
  //   console.log("what are these?", numLikes, set_numLikes);

  const reset = () => {
    set_numLikes(initial_numLikes);
  };
  const initial_like = true;
  const [liked, setLiked] = useState(initial_like);

  const toggleleLike = () => {
    setLiked(!liked);
    console.log("i touch this button with the const");
  };

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);
  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!{" "}
      </p>
      <div>
        <button
          onClick={() => {
            set_numLikes(numLikes + 1);
          }}
        >
          GIVE A LIKE ARROW FUNCTION
        </button>
        <button onClick={increment}>like using increment" the const"</button>
      </div>
      <div>
        <button onClick={() => set_numLikes(0)}>RESET ARROW FUNCTION</button>
        <button onClick={reset}>reset with the const</button>
      </div>

      <div>
        <button onClick={toggleleLike}>
          {" "}
          {liked ? "You LIKED" : "you dont like"}
        </button>{" "}
      </div>
      <div>
        <button onClick={() => setLiked(!liked)}>
          {liked ? "You LIKED" : "you dont like"}
        </button>
        <div>
          {" "}
          THIS HEART WAS TOUCH <b>{heart}</b>
          <button onClick={() => setHeart(!heart)}>
            {heart ? "❤️‍🔥 " : "♥"}
          </button>
        </div>
      </div>
    </div>
  );
}
