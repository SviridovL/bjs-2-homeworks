// тут вы можете вызывать функции из task.js
let PhoneAlarm = new AlarmClock();
PhoneAlarm.addClock("20:49", "Get up", 1);
PhoneAlarm.addClock("20:50", "Get up 2", 2);
//PhoneAlarm.addClock("12:00", "Get up");
PhoneAlarm.addClock("20:51", "Get up 3", 3);
PhoneAlarm.addClock("20:52", "Get up 4", 4);
PhoneAlarm.removeClock(2);
console.log(PhoneAlarm);
//PhoneAlarm.getCurrentFormattedTime();
//PhoneAlarm.start();
//PhoneAlarm.start();
PhoneAlarm.printAlarms();
