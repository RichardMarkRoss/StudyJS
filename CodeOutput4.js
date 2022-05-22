var Employee = {
    company: 'xyz'
};

var emp1 = Object.create(Employee); // can get the company as a prototype property
delete emp1.company // does not delete prototype property
console.log(emp1.company); //out is xyz
console.log(emp1.hasOwnProperty('company')); //out is false