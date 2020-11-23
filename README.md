# React FlipCoin

React component that allows you to control the result of the heads or tails and customize the coins

## Installation

```bash
npm install react-flipcoin
OR
yarn add react-flipcoin
```

## Usage

```ecmascript
import "./App.css";
import FlipCoin from "./components/FlipCoin";

//object options example
const options = [
  {
    name: "Jośe aldo",
    photo:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2447641.png&w=350&h=254",
  },
  {
    name: "Anderson Silva",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Anderson_Silva.png/200px-Anderson_Silva.png",
  },
];

/* Props
 options: Array with options sides with name and photo
 winner: Number position of winner on options array
 winnerMessage: Boolean to show winner message
 aleatory: Boolean if true the result is aleatory
*/

function App() {
  return (
    <div className="App">
      <FlipCoin options={options} winner={1} winnerMessage aleatory />
    </div>
  );
}

export default App;


```

## Demo

Check the [Demo](https://github.com/Christian-Trindade/react-flipcoin-demo)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
