// тут вы можете вызывать функции из task.js
let PhoneAlarm = new AlarmClock();
PhoneAlarm.addClock("23:17", "Get up", 1);
PhoneAlarm.addClock("23:18", "Get up 2", 2);
//PhoneAlarm.addClock("12:00", "Get up");
PhoneAlarm.addClock("23:19", "Get up 3", 3);
PhoneAlarm.addClock("23:20", "Get up 4", 4);
PhoneAlarm.removeClock(2);
console.log(PhoneAlarm);
//PhoneAlarm.getCurrentFormattedTime();
//PhoneAlarm.start();

PhoneAlarm.printAlarms();
//PhoneAlarm.clearAlarms();
PhoneAlarm.start();
