// const to insert the card
const cardContainer = document.getElementById("card-container");

// const team with all members

const team = [
  // first member
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
  },
  // second member
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
  },
  // third member
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
  },
  // fourth member
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
  },
  // fifth member
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg",
  },
  // sixth member
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg",
  },
];

// for cycle to extract every object from the array

for (let teamMember of team) {
  // for cycle to extract every object value from object

  for (let Attribute in teamMember) {
    if (Attribute === "img") {
      console.log("gotcha");
      cardContainer.innerHTML += `
      <img src="./img/${teamMember[Attribute]}" alt="${teamMember[Attribute]}">  
        `;
    } else {
      cardContainer.innerHTML += `
        <p> ${teamMember[Attribute]} </p>
        `;
    }
    // console.log(teamMember[Attribute]);
  }
}

// ! trying out a function to create cards

// generate();

// function generate() {
//   for (let i = 0; i < team.length; i++) {
//     let card = cardGenerator();
//     cardContainer.append(card);
//   }
// }

// function cardGenerator() {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.innerHTML += `
//   <div class="card-body">
//   <h5 class="card-title">COSE LUNGHE</h5>
//   <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quibusdam deleniti dicta officiis quam nam. Facilis explicabo reiciendis esse. Ipsam hic dolores expedita culpa odio dolorum tempore ipsa, aliquid provident?</p>
// </div>
//   `;
//   return card;
// }
