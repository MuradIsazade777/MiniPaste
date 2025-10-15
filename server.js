const express = require('express');
const fs = require('fs');
const { generateId, readStorage, writeStorage } = require('./utils');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/paste', async (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ error: 'Content is required' });

  const id = generateId();
  const data = await readStorage();
  data[id] = { content, createdAt: new Date().toISOString() };
  await writeStorage(data);

  res.status(201).json({ id });
});

app.get('/api/paste/:id', async (req, res) => {
  const data = await readStorage();
  const paste = data[req.params.id];
  if (!paste) return res.status(404).json({ error: 'Paste not found' });
  res.json(paste);
});

app.get('/api/pastes', async (req, res) => {
  const data = await readStorage();
  res.json(data);
});

app.listen(PORT, () => console.log(`MiniPaste running on http://localhost:${PORT}`));
