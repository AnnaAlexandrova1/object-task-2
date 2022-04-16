// TODO: write your code here
export default function orderByProps(obj, priority){
  if(priority === undefined || priority.lenght < 1){
    throw new Error ('Не задана очередность элементов для печати')
  }

  const sortable = [];
  for( let key in obj){
    sortable.push([key, obj[key]])
  }

  let byAlphabet = sortable.filter(element => priority.indexOf(element[0])<0); // возвращает массив значений, которых нет в Priority
  let byPriority = sortable.filter(element => priority.indexOf(element[0])>=0) // возвращает массив значений из Priority

  byAlphabet.sort(function(a, b) {
    let x = a[0].toLowerCase();
    let y = b[0].toLowerCase()
    return x < y ? -1 : x > y ? 1 : 0;
  })
  
  function sort (byPriority, priority) {
    let arr = [];
    for(let i = 0; i < priority.length; i++){
      arr.push(byPriority.filter(element => element[0] === priority[i]))
    }
    return arr
  }
  let newPriority = sort (byPriority, priority);
  newPriority = newPriority.concat(byAlphabet)
  const objSorted = {}
  newPriority.forEach(item => {
    objSorted[item[0]] = item[1]
  })
  return objSorted
}

