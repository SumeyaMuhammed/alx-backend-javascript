export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    value += appendString ;
  }

  return array;
}
