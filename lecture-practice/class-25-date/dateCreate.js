let date = new Date();
console.log(date);
console.log("date in miliseconds",Date.now())
console.log('Date',date.getDate());
console.log('Day',date.getDay());
console.log("Year",date.getFullYear());
console.log("Month",date.getMonth());
console.log("Hours",date.getHours());
console.log("Minutes",date.getMinutes());
console.log("seconds",date.getSeconds());
console.log("miliseconds",date.getMilliseconds());
console.log("Time",date.getTime());

console.log("toDateString",date.toDateString());

console.log("setDate",date.setDate(14));
console.log("setMonth",date.setMonth(2));
console.log("setYear",date.setFullYear(2025));

//Eval - this function use dynamically or run time
let result = eval(10+20);
console.log(result);