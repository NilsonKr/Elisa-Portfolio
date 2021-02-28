// const trucazo = document.querySelector('#trucazo')
const form = document.querySelector('#form')
const links = document.querySelectorAll('.linkMenu')
console.log(links)

form.addEventListener('submit', handleSubmit)

function handleSubmit(ev) {
  ev.preventDefault()
  const form = new FormData(this)
  trucazo.setAttribute('href', `mailto:me@nilsonkr.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
  trucazo.click()
}

document.body.addEventListener('click', ev => {
  const target = ev.target

  
  if(target.classList.contains('linkMenu')){
    links.forEach( link => link.style.color = 'rgba(15, 10, 10, 0.6)')
    target.style.color = '#0F0A0A'
  }
})