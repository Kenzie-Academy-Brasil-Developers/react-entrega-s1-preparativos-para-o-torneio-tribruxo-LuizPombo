function winner(list, setList) {
  setList(list[Math.floor(Math.random() * list.length)]);
}

export default winner;
