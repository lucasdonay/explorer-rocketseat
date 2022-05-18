//list
const students = [
  {
    name: "Lucas Donay",
    n1: 8,
    n2: 6,
  },
  {
    name: "Mayk Brito",
    n1: 10,
    n2: 10,
  },
  {
    name: "João Biro",
    n1: 5,
    n2: 6,
  },
];

let aproved
//calc
function average(n1, n2){
  let averageCalc = ((n1 + n2) / 2)
  aproved = averageCalc >= 7 ? `aproved` : `didn't aproved`;
  return averageCalc;
};

//message
function printAverage(student){
  return`Hey ${student.name}, your average was ${average(student.n1, student.n2)} and you ${aproved}`
};
for (let student of students) {
  let averageMessage = printAverage(student)
  alert(averageMessage)
};