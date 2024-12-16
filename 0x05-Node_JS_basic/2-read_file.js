const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8').trim();

    if (!data) {
      throw new Error('Cannot load the database');
    }

    const lines = data.split('\n').filter((line) => line.length > 0);
    const students = lines.slice(1); // Skip the header line

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((student) => {
      const studentData = student.split(',');
      const firstname = studentData[0];
      const field = studentData[3].trim(); // Trim any spaces in the field name

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // Log the number of students in each field and the respective list of names
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error(`Cannot load the database ${error}`);
  }
}

module.exports = countStudents;
