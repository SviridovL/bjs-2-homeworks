class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = [];
  }
  addClock(time, result, Id) {
    if (Id === undefined) {
      throw new Error("Id не задан");
      return;
    } else if (this.timerId.includes(Id) === true) {
      console.error("Такой Id уже задан");
      return;
    } else {
      let alarm = { subject: Id, value: time, result: result };
      this.timerId.push(Id);
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
    } else {
      console.error("Звонок не удален!");
    }
    indx = this.timerId.indexOf(Id);
    this.timerId.splice(indx, 1);
  }
}
