import { inputModel, resultModel } from "../db/models/datamodel.js";

export const addData = (inputdata) => {
  return new Promise((resolve, reject) => {
    try {
      const data = new inputModel(inputdata);
      data.save();
    } catch (e) {
      reject(e);
    }

    setTimeout(() => {
      const result = resultModel
        .findById("6330cfd06eb9f8e9f65c75c1")
        .then((res) => {
          return res;
        });
      resolve(result);
    }, 3000);
  });
};
