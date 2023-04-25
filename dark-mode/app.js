const articles = [
    {
        title: "The WET Codbase",
        time: "October 4th, 2020 11 min read",
        paragraph: "I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of",
    },
    {
        title: "Goodby, Clean Code",
        time: "November 22nd, 2019 5 min read",
        paragraph: "Biodiesel artisan seitan plaid sriracha copper mug venmo shabby chic. Kickstarter raclette kombucha, yr post-ironic jianbing try-hard flexitarian vaporware normcore",
    },
    {
        title: "My Decade In Review",
        time: "August 11th, 2018 5 min read",
        paragraph: "Direct trade shabby chic four dollar toast, tilde actually try-hard bicycle rights aesthetic forage. Meditation keytar asymmetrical tacos artisan truffaut. Pabst jean shorts roof party scenester.",
    },
    {
        title: "What Are The React Team Principles",
        time: "June 4th, 2015 5 min read",
        paragraph: "Selvage street art hammock affogato VHS. Mustache shaman literally wayfarers schlitz. Direct trade four loko narwhal VHS pop-up, chartreuse trust fund typewriter street art swag thundercats art party.",
    },
]

const main = document.querySelector('main');
const container = document.querySelector('.container');
const brightness = document.querySelectorAll('.toggle span');
let counter = 0;


brightness.forEach(btn => {
    btn.addEventListener('click', function(){
        main.classList.toggle('bright')
    })
})
const populateDom = () => {
    const article = document.createElement('div');
    const title = document.createElement('h1');
    const time = document.createElement('h5');
    const paragraph = document.createElement('p');

    article.classList.add('article');
    title.classList.add('title');
    time.classList.add('time');
    paragraph.classList.add('paragraph');

    title.textContent = articles[counter].title;
    time.textContent = articles[counter].time;
    paragraph.textContent = articles[counter].paragraph;

    article.appendChild(title);
    article.appendChild(time);
    article.appendChild(paragraph);
    container.appendChild(article);
}


window.addEventListener('DOMContentLoaded', function(){
    for(let i = 0; i < articles.length; i++) {
        counter = i
        populateDom()
    }
})