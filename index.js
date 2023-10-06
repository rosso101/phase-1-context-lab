/* Your Code Here */
function createEmployeeRecord(employeeData) {
  return {
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createTimeOutEvent(employee, timestamp) {
  const [date, hour] = timestamp.split(" ");
  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date: date,
  });
  return employee;
}

function hoursWorkedOnDate(employee, date) {
  const timeIn = employee.timeInEvents.find((event) => event.date === date);
  const timeOut = employee.timeOutEvents.find((event) => event.date === date);
  const hoursWorked = (timeOut.hour - timeIn.hour) / 100;
  return hoursWorked;
}

function wagesEarnedOnDate(employee, date) {
  const hoursWorked = hoursWorkedOnDate(employee, date);
  return hoursWorked * employee.payPerHour;
}

function allWagesFor(employee) {
  const datesWorked = employee.timeInEvents.map((event) => event.date);
  const totalWages = datesWorked.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
  return totalWages;
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((employee) => employee.firstName === firstName);
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((employee) => employee.firstName === firstName);
}

function calculatePayroll(employees) {
  return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

