import express from "express";
const app = express();
import { statSync, readdir } from "fs";
import emoji from "node-emoji";
var content = "";
const PORT = 3000;

content = `list of files in my loocal storage(desktop files )`;
let foo = (err, files) => {
  let fl = files.length;
  for (let i = 0; i < fl; i++) {
    var stats = statSync(`C:/Users/sekar/Desktop/${files[i]}`);
    if (stats.isFile()) {
      //If it is as file
      content += `
      ${emoji.emojify(":open_file_folder:")}file ~ ${files[i]}`;
    } else {
      //If it is a directory
      content += ` 
      ${emoji.emojify(":star:")}directory ~ ${files[i]}`;
    }
  }
};
readdir("C:/Users/sekar/Desktop/", "utf8", foo);
app.get("/", (req, res) => {
  res.send(content);
});
app.listen(PORT, () => console.log("server is started"));