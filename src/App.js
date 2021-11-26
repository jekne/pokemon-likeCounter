import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";
import LikeCounter from "./components/LikeCounter";
import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleCard from "./components/AticleCard";
import ArticleList from "./components/ArticleList";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <div className="App">
      <main className="container my-5">
        <Title content="Pokemons on the bottle and LikeCounter on the Top" />
        <div>
          ---------------------------------------------------------------------
        </div>
        <ArticleList />
        <div>
          ---------------------------------------------------------------------
        </div>
        <LikeCounter />
        <div>
          ---------------------------------------------------------------------
        </div>
        <AwesomeAnimals />
        <div>
          ---------------------------------------------------------------------
        </div>
        <div className="row">
          {all_pokemon.map((x, index) => (
            <Pokemon
              key={index}
              abilities={x.abilities}
              name={x.name}
              weight={x.weight}
              terrifying={x.terrifying}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
export default App;
