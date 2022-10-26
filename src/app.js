import express from "express";
import "./db/mongoose.js";
import { inputModel, logsModel } from "./db/models/datamodel.js";
import { addData } from "./utils/processdata.js";

import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.post("/predict", async (req, res) => {
  const inputdata = req.body;

  const timestamp = new Date().toLocaleString();

  console.log(inputdata);

  try {
    await addData(inputdata)
      .then((result) => {
        res.send(result);
        const logs = {
          location: inputdata.location,
          price: result.price,
          time: timestamp,
        };
        new logsModel(logs).save();
      })
      .catch((e) => res.status(400).send(e));
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/predict", async (req, res) => {
  try {
    const data = await inputModel.find({});
    if (!data) {
      return res.sendStatus(404);
    }
    res.send(data);
  } catch (e) {
    res.sendStatus(500);
  }
});

app.delete("/predict", async (req, res) => {
  const loc = req.query.location;
  try {
    if (!loc) {
      return res.status(400).send("check the location parameter");
    }
    const docs = await inputModel.deleteMany({ location: loc });
    res.status(200).send(`deleted ${docs.deletedCount} documents`);
  } catch (e) {
    res.sendStatus(500);
  }
});

app.get("/logs", async (req, res) => {
  try {
    const logs = await logsModel.find({});
    if (!logs) {
      return res.sendStatus(400);
    }
    res.status(200).send(logs);
  } catch (e) {
    res.status(500).send("there was some internal error", e);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
