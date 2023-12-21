function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  console.log('setupCounter')
  element.addEventListener('click', () => setCounter(counter + 2))
  setCounter(0)
}


export {setupCounter};