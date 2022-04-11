// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 1)
}) 

// show or hide faq answers

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        const icon = faq.querySelector('.faq__icon i')
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        } else {
            icon.className = 'uil uil-plus'
        }
    })
})


// show or hide nav menu
const menu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex'
    closeBtn.style.display = 'inline-block'
    menuBtn.style.display = 'none'
})

// close nav menu
const closeNav = () => {
    menu.style.display = 'none'
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'inline-block'
}

closeBtn.addEventListener('click', closeNav)

// school locations

const locations = [
    {
      id: 1,
      address1: "19–22 Dame Street",
      address2: "Dublin 2",
      address3: 'D02 EH93',
      img:
        "../images 2/dame-street.jpeg",
      text:
        "20 classrooms in central Dublin location near all major transport hubs and all local amenities.",
        location: 'https://goo.gl/maps/2M1chLB7KwXhmtTZ6'
    },
    {
      id: 2,
      address1: "7 Herbert Place",
      address2: "Dublin 2",
      address3: 'D02 EH93',
      img:
        "../images 2/herbert-place.jpeg",
      text:
        "9 classrooms in a beautiful school beside the canal.",
        location: 'https://g.page/ELI-Dublin?share'
    },
    {
      id: 3,
      address1: "9/10 Merchant Quay",
      address2: "Drogheda",
      address3: 'A92 VF97',
      img:
        "../images 2/merchant-quay.jpeg",
      text:
        "16 classrooms in a beautiful school on the waterfront. Easy access to Dublin transport routes.",
        location: 'https://goo.gl/maps/QZ9WoKPYcFzJB5NM7'
    },
];

const img = document.getElementById('location-img')
const address1 = document.getElementById('address1')
const address2 = document.getElementById('address2')
const address3 = document.getElementById('address3')
const schoolLocation = document.getElementById('school-location')

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0

window.addEventListener('DOMContentLoaded', () => {
    const item = locations[currentItem]
    img.src = item.img
    schoolLocation.href = item.location
    address1.textContent = item.address1
    address2.textContent = item.address2
    address3.textContent = item.address3
})

function showLocation(location){
    const item = locations[location]
    img.src = item.img
    schoolLocation.href = item.location
    address1.textContent = item.address1
    address2.textContent = item.address2
    address3.textContent = item.address3
}

nextBtn.addEventListener('click', () => {
    currentItem++
    if(currentItem > locations.length - 1){
        currentItem = 0
    }
    showLocation(currentItem)
})

prevBtn.addEventListener('click', () => {
    currentItem--
    if(currentItem < 0){
        currentItem = locations.length - 1
    }
    showLocation(currentItem)
})

// VIDEO

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});