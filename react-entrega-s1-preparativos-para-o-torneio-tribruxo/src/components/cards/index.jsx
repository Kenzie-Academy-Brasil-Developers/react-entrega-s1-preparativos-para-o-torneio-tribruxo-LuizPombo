import Model from "../model[/model";

const Cards = ({ list }) => {
  console.log({ list });
  return (
    <div>
      {list.map((student, index) => (
        <div key={index}>
          <Model characters={student} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
// setList(students[Math.floor(Math.random() * students.length)])
