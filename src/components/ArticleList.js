// src/components/ArticleList.js
import { useEffect, useState } from "react";
import ArticleCard from "./AticleCard";
import Title from "./Title";
import axios from "axios";
export default function ArticleList() {
  const [articles, set_articles] = useState([]);
  const [liked, setLiked] = useState(true);

  // In the pass we use this in the exercise, now change
  // const [articles, set_articles] = useState([
  //   {
  //     id: 1,
  //     title: "What is React all about?",
  //     body: "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
  //   },
  //   {
  //     id: 2,
  //     title: "A lovely kid",
  //     body: "In fact, a kid is also the name of a baby goat!",
  //   },
  //   {
  //     id: 3,
  //     title: "On placeholder image URLs",
  //     body: "So yeah, you won't be able to look these images up. They're placeholders",
  //   },
  // ]);
  const toggleleLike = () => {
    setLiked(!liked);
  };
  const reset = () => {
    set_articles([]);
  };
  useEffect(() => {
    async function fetchSomeData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      console.log("this is my response", response);
      set_articles(response.data);
    }
    fetchSomeData();
  }, []);
  //works like this, but if you want to conect with articlecards, see bellow
  //   return (
  //     <div>
  //       <p>Here's a lovely list of articles, for your reading pleasure:</p>
  //       {articles.map((x) => {
  //         return (
  //           <div key={x.id}>
  //             <h1>{x.title}</h1>
  //             <h7>{x.body}</h7>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <div>
        <button onClick={reset}>CLEAR NOTIFICATIONS</button>
        <button
          onClick={() => {
            set_articles([]);
          }}
        >
          CLEAR ARROW FUNCTION
        </button>
      </div>
      <div>
        <button onClick={toggleleLike}>{liked ? "LIKE" : "NOTLIKE"}</button>
      </div>
      {articles.map((x) => (
        <ArticleCard key={x.id} title={x.title} content={x.body} />
      ))}
    </div>
  );
}
