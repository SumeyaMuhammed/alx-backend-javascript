const engineering = createEmployeesObject("engineering", [
  "John Doe",
  "Guillaume Salva",
]);
const sales = createEmployeesObject("sales", ["Alice", "Bob"]);
const report = createReportObject({ ...engineering, ...sales });

const employeeIterator = createIteratorObject(report);

for (const employee of employeeIterator) {
  console.log(employee);
}
