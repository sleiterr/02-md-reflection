const express = require("express"); 
const app = express();

app.use(express.json());

let products = [
  { id: 1, navn: "Product A", pris: 100 },
  { id: 2, navn: "Product B", pris: 200 },
];

app.get("/products", (req, res) => {
  res.json(products);
});


app.listen(3000, () => {
  console.log("Serveren kører på http://localhost:3000");
});
