var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var newEmpArray = [[],[],[],[]];

function stiFunction(eid, salary, rating) {

  var bonus = 0;

  switch (rating) {
    case 0:
    case 1:
    case 2:
      return bonus;
    case 3:
      bonus += .04;
      if (eid.length < 5) {bonus += .05;}
      if (parseInt(salary) >= 65000) { bonus -= .01;}
      if (bonus > .13) {bonus = .13;}
      return bonus;
    case 4:
      bonus += .06;
      if (eid.length < 5) {bonus += .05;}
      if (parseInt(salary) >= 65000) { bonus -= .01;}
      if (bonus > .13) {bonus = .13;}
      return bonus;

    case 5:
      bonus += .1;
      if (eid.length < 5) {bonus += .05;}
      if (parseInt(salary) >= 65000) { bonus -= .01;}
      if (bonus > .13) {bonus = .13;}
      return bonus;

  }
}

function generateEmpArray () {
  for (var i=0; i<employees.length; i++) {
    console.log("Itteration: " + i);

    newEmpArray[i][0] = employees[i][0]; //initialize employee names in the new array
    newEmpArray[i][1] = stiFunction(employees[i][1], employees[i][2], employees[i][3]); //calculate and push bonus
    newEmpArray[i][2] = Math.round(newEmpArray[i][1]*parseInt(employees[i][2]) + parseInt(employees[i][2])); //bonus*salary + salary
    newEmpArray[i][3] = Math.round(newEmpArray[i][1]*parseInt(employees[i][2])); //bonus dollar ammount
    console.log("new array: " + newEmpArray[i]);
  }
  return newEmpArray;
}

generateEmpArray();
