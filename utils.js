const fs = require('fs').promises;
const path = './storage.json';

function generateId(length = 6) {
  return Math.random().toString(36).substring(2, 2 + length);
}

async function readStorage() {
  try {
    const data = await fs.readFile(path, 'utf-8');
    return JSON.parse(data || '{}');
  } catch {
    return {};
  }
}

async function writeStorage(data) {
  await fs.writeFile(path, JSON.stringify(data, null, 2));
}

module.exports = { generateId, readStorage, writeStorage };
