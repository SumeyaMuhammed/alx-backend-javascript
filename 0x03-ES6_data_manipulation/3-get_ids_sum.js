export default function getStudentIdsSum(students) {
  const id = students.map((student) => student.id);
  return id.reduce((prev, next) => prev + next);
}
