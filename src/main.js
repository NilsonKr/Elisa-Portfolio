// const trucazo = document.querySelector('#trucazo')
const form = document.querySelector('#form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(ev) {
  ev.preventDefault()
  const form = new FormData(this)
  trucazo.setAttribute('href', `mailto:me@nilsonkr.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
  trucazo.click()
}