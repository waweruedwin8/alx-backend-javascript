interface Student {
    firstName : string;
    lastName : string;
    age: number;
    location : string;
}

const studentOne: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
    location: "Nrb",
};

const studentTwo: Student = {
    firstName: "Edwin",
    lastName: "Waweru",
    age: 26,
    location: "NYC",
};

const studentsList: Student[] = [studentOne, studentTwo];
// Create table and append it to the body
const table = document.createElement("table");
const tbody = document.createElement("tbody");

// Loop through studentsList and create rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
