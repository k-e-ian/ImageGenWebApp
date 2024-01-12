// app.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const OPENAI_API_KEY = process.env.WEB_APP_KEY;

app.get("/", (req, res) => {
  res.send("Hello, this is your Express backend!");
});

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  console.log("Received prompt:", prompt);

  if (!prompt) {
    return res
      .status(400)
      .json({ error: "Prompt is required in the request body" });
  }

  const apiUrl = "https://api.openai.com/v1/images/generations";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };
  const data = {
    prompt,
    n: 1,
    size: "512x512",
  };

  try {
    console.log("generating Image ...");
    const response = await axios.post(apiUrl, data, { headers });
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
