// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let image = document.getElementById('person-img');
let job = document.getElementById('job')
let info = document.getElementById('info')
let author = document.getElementById('author')

const btnNext = document.querySelector('.next-btn');
const btnPrev = document.querySelector('.prev-btn');
const surpriseMe = document.querySelector('.random-btn');
let counter = 0;

window.onload = () => {
  counter = 0;
  contentChanger()
}

btnNext.addEventListener('click', () => {
  counter++;
  if (counter > 3) counter = 0;
  contentChanger()
})

btnPrev.addEventListener('click', () => {
  counter--;
  if (counter < 0) counter = 3;
  contentChanger()
})

surpriseMe.addEventListener('click', () => {
  info.textContent = reviews[Math.floor(Math.random() * 3)].text;
})


function contentChanger() {
  image.src = reviews[counter].img;
  job.textContent = reviews[counter].job;
  author.textContent = reviews[counter].name;
  info.textContent = reviews[counter].text;
}