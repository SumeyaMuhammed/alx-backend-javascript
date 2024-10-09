export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    return arr.map((arr) => arr.id);
  } else {
    return [];
  }
}
