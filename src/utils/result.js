import fs from "fs";


export const result = () => {
  const data = loaddata();
  console.log(data);
  return data;
};

const loaddata = () => {
  try {
    const bufferdata = fs.readFileSync("result.json");
    const data = bufferdata.toString();
    return JSON.parse(data);
  } catch (e) {
    return {};
  }
};
