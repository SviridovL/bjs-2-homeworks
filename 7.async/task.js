class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock(time, result, Id) {
    if (Id === undefined) {
      throw new Error("Id не задан");
      return;
    }
    if (this.alarmCollection.find((item) => item.subject === Id)) {
      console.error("Такой Id уже задан");
    } else {
      let alarm = { subject: Id, value: time, result: result };
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

  getCurrentFormattedTime() {
    let humanFormat = new Date();
    let DateHoursMinutes = humanFormat.toString();
    let HM = DateHoursMinutes.slice(16, 21);
    return HM;
  }

  start() {
    function checkClock(time, result, HM) {
      if (time === HM) {
        console.log(result);
      }
    }
    {
      if (this.timerId === null) {
        this.timerId = setInterval(
          () =>
            this.alarmCollection.forEach((alarm) =>
              checkClock(
                alarm.value,
                alarm.result,
                this.getCurrentFormattedTime()
              )
            ),
          10000
        );
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

  clearAlarms() {
    this.stop();
    let alarmNumbers = this.alarmCollection.length;
    this.alarmCollection.splice(0, alarmNumbers);
    console.log(this.alarmCollection);
  }
}
