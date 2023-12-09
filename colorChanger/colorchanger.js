let index = 0;

let colors = [
  { hex: "#418FDE", name: "UN Blue" },
  { hex: "#FFB81C", name: "Yellow" },
  { hex: "#5CB8B2", name: "Mint Green" },
  { hex: "#FF671F", name: "Orange" },
  { hex: "#D22630", name: "Red" }
];

function changeColors(){
  document.getElementsByTagName("body")[0].style.background = colors[index].hex;
  document.getElementById("colorName").innerText = colors[index].name;
  index++;

  if (index > colors.length - 1)
    index = 0;
}
