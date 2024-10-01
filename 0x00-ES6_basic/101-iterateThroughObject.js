const engineering = createEmployeesObject("engineering", [
  "John Doe",
  "Guillaume Salva",
]);
const sales = createEmployeesObject("sales", ["Alice", "Bob"]);
const report = createReportObject({ ...engineering, ...sales });

const reportWithIterator = createIteratorObject(report);
const employeeList = iterateThroughObject(reportWithIterator);

console.log(employeeList);
