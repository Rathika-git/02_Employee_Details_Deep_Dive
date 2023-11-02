const employees = [
  {
    id: "C101",
    name: "Varun",
    role: "Junior Web Developer",
    experience: "2 Years",
    payout: "25000",
  },
  {
    id: "C102",
    name: "Srinika",
    role: "Junior Web Developer",
    experience: "1 Year",
    payout: "20000",
  },
  {
    id: "C103",
    name: "Rakshitha",
    role: "Front End Developer",
    experience: "3 Years",
    payout: "30000",
  },
  {
    id: "C104",
    name: "Hema",
    role: "Junior Web Developer",
    experience: "3 Years",
    payout: "25000",
  },
  {
    id: "C105",
    name: "Deepak",
    role: "Front End Developer",
    experience: "4 Years",
    payout: "35000",
  },
  {
    id: "C106",
    name: "Sakthi",
    role: "Back End Developer",
    experience: "2 Years",
    payout: "30000",
  },
  {
    id: "C107",
    name: "Dakshan",
    role: "Senior Front End Developer",
    experience: "5 Years",
    payout: "45000",
  },
  {
    id: "C108",
    name: "Ananth",
    role: "BDE",
    experience: "2 Years",
    payout: "20000",
  },
  {
    id: "C109",
    name: "Sharaddha",
    role: "Business Associate",
    experience: "1 Year",
    payout: "15000",
  },
  {
    id: "C110",
    name: "Dinesh",
    role: "Tech Lead",
    experience: "4 Years",
    payout: "65000",
  },
];


//Displaying employee details in a table format in console
console.log("Employee Details:");
console.table(employees);

//Displaying Employees who are working as a Junior Web Developer
const juniorWebDevelopers = employees.filter(employee => employee.role === "Junior Web Developer");
console.log("Junior Web Developers:");
console.table(juniorWebDevelopers);

//Displaying Total Employees who are working as a Junior Web Developer
const totalJuniorWebDevelopers = juniorWebDevelopers.length;
console.log("Total Junior Web Developers:", totalJuniorWebDevelopers);

//Displaying Employee name and role whose salary range is from 25000 to 35000
const employeesInRange = employees.filter(employee => parseInt(employee.payout) >= 25000 && parseInt(employee.payout) <= 35000);
console.log("Employees within Salary Range (25000 to 35000):");
console.table(employeesInRange);
/*employeesInRange.forEach(employee => {
console.log(`Name: ${employee.name}, Role: ${employee.role}`);
});*/

//Instead of parseInt can use unary +operator for conversion//
/*const employeesInRange = employees.filter(function(employee) {
  return +employee.payout >= 25000 && +employee.payout <= 35000;
});

console.log("Employees within Salary Range (25000 to 35000):");
employeesInRange.forEach(function(employee) {
  console.log(`Name: ${employee.name}, Role: ${employee.role}`);
});*/

//Displaying the senior employee details
const seniorEmployee = employees.reduce((senior, employee) => {
  return parseInt(employee.experience) > parseInt(senior.experience) ? employee : senior;
});
console.log("Senior Employee Details:");
//console.log(`Name: ${seniorEmployee.name}, Role: ${seniorEmployee.role}, Experience: ${seniorEmployee.experience}, Payout: ${seniorEmployee.payout}`);
console.table([seniorEmployee]);


//Another way to display instead of using parseInt
/*const seniorEmployee = employees.reduce(function(senior, employee) {
  return +employee.experience > +senior.experience ? employee : senior;
});

console.log("Senior Employee Details:");
console.table([seniorEmployee]);*/