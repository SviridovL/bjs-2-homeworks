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

  start(time, result) {
    // getCurrentFormattedTime();
    const checkClock = (time, result) => {
      getCurrentFormattedTime();
      if (time === HM) console.log(result);
    };
    for (let i = 0; i < this.alarmCollection.length; i++) {
      //  if (HM === this.alarmCollection[i].value) {
      //  console.log(this.alarmCollection[i].result);
      // }
      if (this.timerId === null) {
        this.timerId = setInterval(
          () => {
            checkClock(
              this.alarmCollection[i].value,
              this.alarmCollection[i].result
            );
          },
          10000,
          null
        );
       
      }
    }
  }
}

function getCurrentFormattedTime() {
  let humanFormat = new Date();
  let DateHoursMinutes = humanFormat.toString();
  HM = DateHoursMinutes.slice(16, 21);
  return HM;
}

//   if (this.timerId !== null) {
//   }
//   const check = () => {
//     this.AlarmCollection.forEach((element) => {
//       checkClock(value);
//     });
//   };
//   setInterval(checkClock, 1000);
// }
