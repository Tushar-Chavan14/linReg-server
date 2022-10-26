import mongoose from "mongoose";

export const inputModel = mongoose.model("datas", {
  location: {
    type: String,
    trim: true,
    required: true,
  },
  sqft: {
    type: Number,

    required: true,
  },
  bath: {
    type: Number,
    required: true,
  },
  bhk: {
    type: Number,
    required: true,
  },
});

export const resultModel = mongoose.model("results", {
  price: {
    type: Number,
  },
});

export const logsModel = mongoose.model("logs", {
  location: {
    type: String,
  },
  price: {
    type: Number,
  },
  time: {
    type: String,
  },
});
