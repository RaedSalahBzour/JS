const students = [
  { name: "ahmad", marks: [85, 92, 88] },
  { name: "ali", marks: [78, 85, 90] },
  { name: "salma", marks: [90, 95, 87] },
];
const withAverage = students.map(student => {
  let sum = 0;
  for (let i = 0; i < student.marks.length; i++) {
    sum += student.marks[i];
  }
  let average = Math.floor(sum / student.marks.length);
  return { ...student, average }; //return the same object with the additional of the average
});
console.log(withAverage);

console.log(
  withAverage.filter(student => {
    if (student.average > 90) {
      console.log(student.name);
    }
  })
);

const totalAverages = withAverage.reduce(
  (acc, student) => acc + student.average,
  0
);
console.log(totalAverages / 3);
withAverage.forEach((student, index) => {
  student.marks[2] = 50;
});
console.log(withAverage);

console.log(withAverage.find(student => student.name === "ali"));
