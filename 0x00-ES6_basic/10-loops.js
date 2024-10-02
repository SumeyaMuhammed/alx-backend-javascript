export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
 newArray.push(appendString + value);
  }

  return array;
}
