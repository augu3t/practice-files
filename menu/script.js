let meals = [
{
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "img/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "img/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "img/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "img/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "img/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "img/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "img/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "img/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "img/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "img/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

let div = 
`<div class="meal">
<div class="img-container">
  <div class="img-wrap">
    <img src="img/item-1.jpeg" alt="pancakes">
  </div>
</div>

<div class="aside">
  <div class="info-wrap">
    <span class="meal-name">buttermilk pancakes</span>
    <span class="price">$15.99</span>
  </div>
  <div>
    <p class="desc">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Deserunt rem doloribus accusamus similique ipsa ipsam vitae 
      voluptate, non iusto quam.
    </p>
  </div>
</div>
</div>`;
let section = document.querySelector('.menu-items');
let buttons = document.querySelectorAll('.button')

meals.forEach(function(item){
  displayMenu(item);
});

buttons.forEach(function(button){
  let category = [];

  button.addEventListener('click', function(e){
    let btnName = e.target.textContent;
    section.innerHTML = '';
    category = [];

    meals.forEach(function(item){
      if(btnName == item.category){
        category.push(item);
      }
      else if(btnName == 'all'){
        category.push(item);
      }
    })

    category.forEach(function(item){
      displayMenu(item);
    })
  })
})



function displayMenu(value){
  let shake = document.createElement('div');
  shake.innerHTML = div;
  let price = shake.querySelector('.price');
  let mealName = shake.querySelector('.meal-name');
  let desc = shake.querySelector('.desc');
  let image = shake.querySelector('img');
  image.src = value.img;
  mealName.textContent = value.title;
  desc.textContent = value.desc;
  price.textContent = value.price;

  section.appendChild(shake);
}








