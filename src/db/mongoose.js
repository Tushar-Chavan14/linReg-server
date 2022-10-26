import mongoose from "mongoose";

const dbname = "PredictionData";

const connectionurl = `mongodb+srv://Akash:helloworld@cluster0.6pagbip.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(connectionurl, { useNewUrlParser: true });
