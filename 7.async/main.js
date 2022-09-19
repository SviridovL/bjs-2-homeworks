// тут вы можете вызывать функции из task.js
let PhoneAlarm = new AlarmClock();
PhoneAlarm.addClock("12:00", "Get up", 1);
PhoneAlarm.addClock("12:01", "Get up 2", 2);
//PhoneAlarm.addClock("12:00", "Get up");
PhoneAlarm.addClock("12:00", "Get up 3", 3);
PhoneAlarm.addClock("12:00", "Get up 4", 3);
PhoneAlarm.removeClock(2);
console.log(PhoneAlarm);
