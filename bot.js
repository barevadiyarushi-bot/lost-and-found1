const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const OPENAI_API_KEY = "AIzaSyAUTSzFrRs2G32ckriHlbVU2eLkxw-jwFU";

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: userMessage }]
    })
  });

  const data = await response.json();

  res.json({
    reply: data.choices[0].message.content
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));