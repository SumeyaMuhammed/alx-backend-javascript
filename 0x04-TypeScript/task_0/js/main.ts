interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
headerFirstName.textContent = 'First Name';
const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
tableBody.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const cellFirstName = document.createElement('td');
  cellFirstName.textContent = student.firstName;
  row.appendChild(cellFirstName);

  const cellLocation = document.createElement('td');
  cellLocation.textContent = student.location;
  row.appendChild(cellLocation);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
