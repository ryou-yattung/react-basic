import { Component } from "react";
import "./App.css";

class App extends Component {
  //1
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  //componentDidMount只RUN 1次(DOM ノードを必要とする初期化はここで行われる)
  //所以好快
  componentDidMount() {
    //3
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }; //return返個名去state
          },
          () => console.log(this.state)
        )
      );
  }

  render() {
    //2

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholden="search monsters"
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) =>
              monster.name.toLocaleLowerCase().includes(searchString)
            );
            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />

        {this.state.monsters.map((monster) => {
          return <h1 key={monster.name}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
