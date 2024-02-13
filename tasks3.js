function delayedExecution() {
    return new Promise((resolve, reject) => {
      const randomTime = Math.random() * 3000;
      const timer = setTimeout(() => reject(new Error('Время превысило 2 секунды')), 2000);
      setTimeout(() => {
        clearTimeout(timer);
        resolve();
      }, randomTime);
    });
  }
  
  delayedExecution()
    .then(() => console.log('Выполнено вовремя'))
    .catch(error => console.error(error.message));
  