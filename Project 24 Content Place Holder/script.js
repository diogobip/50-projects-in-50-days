const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://cdn.britannica.com/99/38699-050-5BC18587/Grigory-Yefimovich-Rasputin.jpg" alt="" />'
  title.innerHTML = 'Ra Ra Rasputinn!!'
  excerpt.innerHTML =
    'There lived a certain man in Russia long ago. He was big and strong, in his eyes a flaming glow.'
  profile_img.innerHTML =
    '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VqJCM3vq2D7nSKBgio5JpMseWiU8AhF57w&s" alt="" />'
  name.innerHTML = 'Booney M'
  date.innerHTML = 'Oct 08, 2020'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}