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


function generateGroupInserts(groups) {
    return groups.map(group => {
      return `INSERT INTO groups (debut_date, group_name, hex_code) VALUES ('${group.debut_date}', '${group.group_name}', '${group.hex_code}');`;
    }).join('\n');
  }
  
  function generateIdolInserts(idols) {
    return idols.map(idol => {
      return `INSERT INTO idols (DOB, group, stage_name, legal_name) VALUES ('${idol.DOB}', '${idol.group}', '${idol.stage_name}', '${idol.legal_name}');`;
    }).join('\n');
  }

  const groupSQL = generateGroupInserts(groups);
const idolSQL = generateIdolInserts(idols);

const fullSQL = `${groupSQL}\n\n${idolSQL}`;


await fs.writeFile("kpopit_inserts.txt", fullSQL, "utf-8");
console.log("SQL insert commands written to kpopit_inserts.txt");