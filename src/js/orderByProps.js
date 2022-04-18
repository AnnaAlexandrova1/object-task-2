// TODO: write your code here
export default function orderByProps(obj, priority) {
  const sortable = [];
  for (const key in obj) {
    if (obj.prototype.hasOwnProperty.call(obj, 'key')) {
      sortable.push([key, obj[key]]);
    }
  }
  // возвращает массив значений, которых нет в Priority
  const byAlphabet = sortable.filter((element) => priority.indexOf(element[0]) < 0);
  // возвращает массив значений из Priority
  const byPriority = sortable.filter((element) => priority.indexOf(element[0]) >= 0);
  byAlphabet.sort((a, b) => {
    const x = a[0].toLowerCase();
    const y = b[0].toLowerCase();
    let res;
    if (x < y) {
      res = -1;
    }
    if (x > y) {
      res = 1;
    }
    if (x === 0) {
      res = 0;
    }
    return res;
  });
  function sort(byPriority, priority) {
    const arr = [];
    for (let i = 0; i < priority.length; i += 1) {
      arr.push(byPriority.filter((element) => element[0] === priority[i])[0]);
    }
    return arr;
  }
  let newPriority = sort(byPriority, priority);
  newPriority = newPriority.concat(byAlphabet);
  const arrSorted = [];
  newPriority.forEach((item) => {
    arrSorted.push({
      key: item[0],
      value: item[1],
    });
  });
  return arrSorted;
}
