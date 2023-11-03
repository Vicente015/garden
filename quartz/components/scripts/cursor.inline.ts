
const cursor = document.querySelector<HTMLDivElement>('.cursor')
document.addEventListener('mousemove', (event) => {
  cursor?.style.setProperty('left', event.pageX + 'px')
  cursor?.style.setProperty('top', event.pageY + 'px')
})
