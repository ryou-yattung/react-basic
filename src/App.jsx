import React from "react";
import { useState } from "react";
import CardList from "./components/card-list/";
import SearchBox from "./components/search-box";
import "./App.css";
import { useEffect } from "react";

function App() {
  //fetchしたdataをmonstersに
  const [monsters, setMonsters] = useState([]);
  //search-barの文字をsearchFieldに
  const [searchField, setSearchField] = useState("");
  //filteredMonsters
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  //title name set
  const [title, setTitle] = useState("My monsters");

  console.log("render");

  useEffect(() => {
    console.log("effect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSeachChange = (event) => {
    //要將字轉為小寫
    const searchFieldString = event.target.value.toLocaleLowerCase();
    //改state
    setSearchField(searchFieldString);
  };

  const onTitileChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <h1 className="app-title">{title}</h1>

      <SearchBox
        onSeachChange={onTitileChange}
        placeholden={"titilec hange"}
        className={"monster-search-box"}
      />
      <br />
      <SearchBox
        onSeachChange={onSeachChange}
        placeholden={"monster-search"}
        className={"monster-search-box"}
      />

      <CardList monsters={filteredMonsters} />
    </>
  );
}

export default App;
