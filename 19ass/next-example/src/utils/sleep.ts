export function sleep(seconds: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Resolved');
      }, seconds * 1000);
    });
  }
  