const Model = ({ characters }) => {
  return (
    <div className={characters.house}>
      <h3>{characters.name}</h3>
      <img src={characters.image} alt={characters.name} />
      <p>{characters.house}</p>
      <p>{characters.gender}</p>
    </div>
  );
};

export default Model;
