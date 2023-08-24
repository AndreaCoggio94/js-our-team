// * const to insert the card
const cardContainer = document.getElementById("card-container");

// * const team with all members

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

// * for cycle to extract every object from the array

for (let teamMember of team) {
  // * for cycle to extract every object value from object

  const teamCard = [];
  for (let Attribute in teamMember) {
    // if (Attribute === "img") {
    //   cardContainer.innerHTML += `
    //       <img src="./img/${teamMember[Attribute]}" alt="${teamMember[Attribute]}">
    //       `;
    // } else {
    //   cardContainer.innerHTML += `
    //         <p> ${teamMember[Attribute]} </p>
    //         `;
    // }
    teamCard.push(teamMember[Attribute]);
    // console.log(teamMember[Attribute]);
  }

  let card = cardGenerator(teamCard[0], teamCard[1], teamCard[2]);
  cardContainer.append(card);
}

// * function to create cards

function cardGenerator(name, role, img) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML += `
  <img class="card-img-top" src="./img/${img}" alt="${img}">
  <div class="card-body">
  
  <h5 class="card-title">${name}</h5>
  <p class="card-text">${role}</p>
</div>

  `;

  return card;
}
