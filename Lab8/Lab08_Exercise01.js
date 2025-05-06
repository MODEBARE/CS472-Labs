class Meditation {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    let counter = this.seconds;
    const interval = setInterval(() => {
      console.log(counter);
      counter--;
      if (counter === 0) {
        clearInterval(interval);
        console.log("Jay Guru Dev");
      }
    }, 1000);
  }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);