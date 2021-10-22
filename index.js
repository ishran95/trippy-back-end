const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const hotels = ["Hilton","Ritz","Trianon Palace"];

app.get("/hotels", (req, res) => {
  res.send(hotels);
});

app.get("/hotels/:id", (req, res) => {
  const index = req.params.id-1
  res.json(hotels[index]);
});

app.post("/hotels", (req, res) => {
  const hotel = req.body.name;
  hotels.push(hotel);
  res.json({ success: true });
});

app.put("/hotels/:id", (req, res) => {
  const name = req.query.name;
  const index = req.params.id;
hotels[index]=name;
})
app.listen(port,()=>{console.log('server  starterd at 3000');});
