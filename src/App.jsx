import { Component } from "react";
import "./App.css";

class App extends Component {
  //1
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
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
    //4

    //fliter出monsters名
    //[{name:""},{name:""}]
    //要將字轉為小寫(toLocaleLowerCase())
    //素が配列に含まれているかどうかを true または false で返します()includes()
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchField)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholden="search monsters"
          onChange={(event) => {
            //要將字轉為小寫
            const searchField = event.target.value.toLocaleLowerCase();

            //改state
            //因為要儲係componment既state
            this.setState(() => {
              return { searchField }; //searchField:searchField
            });
          }}
        />

        {/* 用fliter出monsters名做map */}
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.name}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
