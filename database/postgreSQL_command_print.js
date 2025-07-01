import fs from "fs/promises";
import { parse } from "csv-parse/sync"; 
async function loadFile(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");

    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    });

    return records;
  } catch (err) {
    console.error("Error reading CSV:", err);
  }
}

const groups = await loadFile("./kpopit_groups.csv");
const idols = await loadFile("./kpopit_idols.csv");

console.log("Groups:", groups.slice(0, 10));
console.log("Idols:", idols.slice(0, 10));
