import fs from "fs/promises";
import { parse } from "csv-parse/sync";

// Normalize headers like 'Debut Date' -> 'debut_date'
const normalizeHeaders = header =>
  header.map(h => h.trim().toLowerCase().replace(/\s+/g, '_'));

async function loadFile(filePath) {
  const content = await fs.readFile(filePath, "utf-8");
  return parse(content, {
    columns: normalizeHeaders,
    skip_empty_lines: true,
    trim: true
  });
}

function generateGroupInserts(groups) {
  return groups.map(group => {
    return `INSERT INTO groups (debut_date, group_name, hex_code) VALUES (${group.debut_date}, '${group.group_name}', '${group.hex_code}');`;
  }).join("\n");
}

function generateIdolInserts(idols) {
  return idols.map(idol => {
    return `INSERT INTO idols (birthday, group_name, stage_name, legal_name) VALUES (${idol.birthday}, '${idol.group}', '${idol.stage_name}', '${idol.legal_name}');`;
  }).join("\n");
}

const groups = await loadFile("./kpopit_groups.csv");
const idols = await loadFile("./kpopit_idols.csv");

console.log("✅ Sample group:", groups[0]);
console.log("✅ Sample idol:", idols[0]);

const groupSQL = generateGroupInserts(groups);
const idolSQL = generateIdolInserts(idols);
const fullSQL = `${groupSQL}\n\n${idolSQL}`;

await fs.writeFile("kpopit_inserts.txt", fullSQL, "utf-8");
console.log("🎉 INSERT statements written to kpopit_inserts.txt");
