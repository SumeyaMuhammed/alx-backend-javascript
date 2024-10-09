export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
