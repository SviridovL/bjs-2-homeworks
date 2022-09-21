// тут вы можете вызывать функции из task.js
let PhoneAlarm = new AlarmClock();
PhoneAlarm.addClock("15:37", "Get up", 1);
PhoneAlarm.addClock("15:38", "Get up 2", 2);
//PhoneAlarm.addClock("12:00", "Get up");
PhoneAlarm.addClock("15:39", "Get up 3", 3);
PhoneAlarm.addClock("15:40", "Get up 4", 3);
PhoneAlarm.removeClock(2);
console.log(PhoneAlarm);
//PhoneAlarm.getCurrentFormattedTime();
//PhoneAlarm.start();
PhoneAlarm.start();
