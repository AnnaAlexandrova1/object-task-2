export default function getItem(obj) {
  const resulrArr = [];
  const { special } = obj;
  special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    resulrArr.push({
      id, name, icon, description,
    });
  });
  return resulrArr;
}
