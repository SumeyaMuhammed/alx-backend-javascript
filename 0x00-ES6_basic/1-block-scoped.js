export default function taskBlock(trueOrFalse) {
  var task = true;
  var task2 = false;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
