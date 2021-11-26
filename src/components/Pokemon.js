// export default function Pokemon(props) {
//   //   const all_pokemon = [
//   //     { name: "Charizard", weight: 90 },
//   //     { name: "Bulbasaur", weight: 6.9 },
//   //     { name: "Mewtwo", weight: 122 },
//   //     { name: "Mega beedrill", weight: 65 },
//   //   ];

//   return (
//     <div>
//       {" "}
//       <h2>Pokemon name: {props.name}</h2>
//       <p>Weight: {props.weight} kg</p>
//       <p>Awesome: {props.awesome ? "YES" : "Nope, not really "}</p>
//       <p>Terrifying: {props.terrifying ? "VERY" : "nah, lovable"}</p>
//       <p>Abilities: </p>
//       <ul>
//         {props.abilities.map((ability, index) => {
//           return <li key={index}>{ability}</li>;
//         })}
//       </ul>
//       {/* <div>
//         {all_pokemon.map((x) => {
//           return (
//             <ul key="hum">
//               <p>NAME MAP: {x.name}</p>
//               <p>WEIGHT MAP:{x.weight}</p>
//             </ul>
//           );
//         })}
//       </div>
//       <div>
//         {" "}
//         {all_pokemon.map((x) => {
//           return <p>this is the weight map{x.weight}</p>;
//         })}
//       </div> */}
//     </div>
//   );
// }
// src/components/Pokemon.js

// src/components/Pokemon.js
export default function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body pb-0">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          {props.awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
          <br />
          {props.abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability, index) => {
          return (
            <li key={index} className="list-group-item">
              {ability}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
