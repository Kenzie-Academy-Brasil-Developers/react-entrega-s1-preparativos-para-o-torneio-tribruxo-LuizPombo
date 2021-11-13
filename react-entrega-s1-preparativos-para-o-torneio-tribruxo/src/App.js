import "./App.css";
import { useEffect, useState } from "react";
import FilterImage from "./components/filterImage";
import Cards from "./components/cards";
import winner from "./components/winner";

export default function App() {
  const [students, setStudents] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((list) => list.json())
      .then((list) => {
        setStudents(list.filter(FilterImage));
      });
  }, []);
  function randomizer() {
    let result = [];
    let allStudents = students;
    for (let i = 0; i < 3; i++) {
      let student = allStudents[Math.floor(Math.random() * allStudents.length)];
      let house = student.house;
      const filteredStudents = allStudents.filter((n) => n.house !== house);
      allStudents = filteredStudents;
      result.push(student);
    }
    setList(result);

    // function winner() {
    //
    // }
  }
  function winner() {
    setList([list[Math.floor(Math.random() * list.length)]]);
  }
  return (
    <div className="App">
      <div className="cards">
        <Cards list={list} />
        <button onClick={() => randomizer()}>novos competidores</button>
        <button onClick={() => winner()}>vencedor</button>
      </div>
    </div>
  );
}
