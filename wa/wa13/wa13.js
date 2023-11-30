const staff = {
  "employees" : [
    {
      "name" : "Sam",
      "department" : "Tech",
      "designation" : "Manager",
      "salary" : 40000,
      "raise" : true,
    },
    {
      "name" : "Mary",
      "department" : "Finance",
      "designation" : "Trainee",
      "salary" : 18500,
      "raise" : true,
    },
    {
      "name" : "Bill",
      "department" : "HR",
      "designation" : "Executive",
      "salary" : 21200,
      "raise" : false,
    },
  ]
}
console.log("Question 1");
console.log(staff);

let company = {
  "companyName" : "Tech Stars",
  "website" : "www.techstars.site",
  "employees" : [
    {
      "name" : "Sam",
      "department" : "Tech",
      "designation" : "Manager",
      "salary" : 40000,
      "raise" : true,
    },
    {
      "name" : "Mary",
      "department" : "Finance",
      "designation" : "Trainee",
      "salary" : 18500,
      "raise" : true,
    },
    {
      "name" : "Bill",
      "department" : "HR",
      "designation" : "Executive",
      "salary" : 21200,
      "raise" : false,
    },
  ]
}
console.log("Question 2");
console.log(company);

let newEmployee = {
  "companyName" : "Tech Stars",
  "website" : "www.techstars.site",
  "employees" : [
    {
      "name" : "Sam",
      "department" : "Tech",
      "designation" : "Manager",
      "salary" : 40000,
      "raise" : true,
    },
    {
      "name" : "Mary",
      "department" : "Finance",
      "designation" : "Trainee",
      "salary" : 18500,
      "raise" : true,
    },
    {
      "name" : "Bill",
      "department" : "HR",
      "designation" : "Executive",
      "salary" : 21200,
      "raise" : false,
    },
    {
      "name" : "Anna",
      "department" : "Tech",
      "designation" : "Executive",
      "salary" : 25600,
      "raise" : false,
    },
  ]
}
console.log("Question 3");
console.log(newEmployee);

let sum = 0;
//let salary = newEmployee.salary[0];
for (let i = 0; i < newEmployee.employees.length; i++) {
  sum += newEmployee.employees[i].salary;
}
console.log("Question 4");
console.log(sum);

for (let i = 0; i < newEmployee.employees.length; i++) {
  if(newEmployee.employees[i]['raise'] == true) {
    newEmployee.employees[i]['salary'] += newEmployee.employees[i]['salary']* .1;
    newEmployee.employees[i]['raise'] = false;
  }
}
console.log("Question 5");
console.log(newEmployee);

let arr = ['Anna', 'Sam'];
for (let i = 0; i < newEmployee.employees.length; i++) {
  for(let j = 0; arr.length; j++) {
    if(newEmployee.employees[i]['name'] == arr[j]) {
      newEmployee.employees[i]['wfh'] == true;
    } else {
      newEmployee.employees[i]['wfh'] == false;
    }
  }
}
console.log("Question 6")
console.log(newEmployee)





