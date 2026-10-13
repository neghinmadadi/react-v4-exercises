function SnackList() {
  /* create an array of snacl objs */
  const snackList = [
    { name: 'Potato Chips', rank: 3 },
    { name: 'Pistachios', rank: 2 },
    { name: 'Chocolate', rank: 1 },
  ];

  /** sort the array based on each item's ranking */
  const sortedSnackList = snackList.toSorted(
    (firstSnack, secondSnack) => firstSnack.rank - secondSnack.rank
  );
  return (
    <ul>
      {sortedSnackList.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ul>
  );
}

export default SnackList;
