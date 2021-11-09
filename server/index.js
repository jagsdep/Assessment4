const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  
  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {

  const fortune = ["A lifetime of happiness lies ahead of you.", 
                   "All will go well with your new project.", 
                   "Change is happening in your life, so go with the flow!", 
                   "Every flower blooms in its own sweet time.",
                   "Love lights up the world."];

// choose random fortune

let randomInd = Math.floor(Math.random() * fortune.length);
let randomFortune = fortune[randomInd];

res.status(200).send(randomFortune);
});

app.post("/api/quotes", (req, res) => {
 
     let {quotes, rating} = req. body
     let newQuotes = {
      quotes,
      rating
    } 
      
  createQuotes.push(newQuotes)
  res.status(200).send(quotes)

  }

);



app.listen(4000, () => console.log("Server running on 4000"));
