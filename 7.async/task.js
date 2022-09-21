class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock(time, result, Id) {
    if (Id === undefined) {
      throw new Error("Id не задан");
      return;
    } else if (this.timerId === Id) {
      console.error("Такой Id уже задан");
      return;
    } else {
      let alarm = { subject: Id, value: time, result: result };
      //this.timerId.push(Id);
      this.alarmCollection.push(alarm);
    }
  }
  removeClock(Id) {
    let startLength = this.alarmCollection.length;
    let indx = this.alarmCollection.indexOf(Id);
    this.alarmCollection.splice(indx, 1);
    let endLength = this.alarmCollection.length;
    if (endLength < startLength) {
      console.log("Удаление успешно!");
      return true;
    } else {
      console.error("Звонок не удален!");
    }
  }

  start() {
    function checkClock(time, result) {
      getCurrentFormattedTime();
      if (time === HM) console.log(result);
    }
    {
      if (this.timerId === null) {
        this.timerId = setInterval(() => {
          for (let i = 0; i < this.alarmCollection.length; i++)
            checkClock(
              this.alarmCollection[i].value,
              this.alarmCollection[i].result
            );
        }, 30000);
      }
    }
  }
  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  printAlarms() {
    this.alarmCollection.forEach((alarm) =>
      console.log(alarm.subject, alarm.value)
    );
  }
}
function getCurrentFormattedTime() {
  let humanFormat = new Date();
  let DateHoursMinutes = humanFormat.toString();
  let HM = DateHoursMinutes.slice(16, 21);
  return HM;
}
