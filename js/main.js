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
    console.log(teamMember[Attribute]);
  }
  //   console.log(teamMember.name);
  //   console.log(teamMember.role);
  //   console.log(teamMember.img);
}
