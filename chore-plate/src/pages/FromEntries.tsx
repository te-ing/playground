function fromEntries() {
  const fruits = ['apple', 'apple', 'banana', 'orange', 'orange', 'apple'];
  const fruitList = ['all', ...new Set(fruits), 'peach'];

  const entries = fruitList.map(mapValue => [
    mapValue,
    fruits.filter(fruit => mapValue === 'all' || fruit === mapValue).length,
  ]);
  const obj = Object.fromEntries(entries);

  // Map 으로 구현
  const map = new Map();
  fruitList.forEach(fruit => map.set(fruit, 0));
  fruits.forEach(fruit => map.set(fruit, map.get(fruit) + 1));
  map.set('all', fruits.length);

  return (
    <>
      <h1>fromEntries</h1>
      <div>fruits: {fruits.join(', ')}</div>
      <div>fruitList: {fruitList.join(', ')}</div>
      <hr></hr>
      <div>
        - fruitsNumber (Object) -
        {fruitList.map((fruit, i) => {
          return (
            <div key={i}>
              {fruit} : {obj[fruit]}
            </div>
          );
        })}
      </div>
      <hr></hr>
      <div>
        - fruitsNumber (Map) -
        {fruitList.map((fruit, i) => {
          return (
            <div key={i}>
              {fruit} : {map.get(fruit)}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default fromEntries;
