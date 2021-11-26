export default function AwesomeAnimals() {
  return (
    <ul>
      {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
        (animal, index) => {
          return (
            <ul key={index}>
              <li>
                Awesomeness level {index + 1} :{animal}
              </li>
            </ul>
          );
        }
      )}
    </ul>
  );
}
