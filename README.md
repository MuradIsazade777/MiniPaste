# MiniPaste 📝 

**MiniPaste** is a minimalist backend-powered pastebin clone built with Express.js. It offers a simple REST API for creating, retrieving, and listing text snippets ("pastes"). Designed for clarity, modularity, and rapid deployment, MiniPaste stores data in a local JSON file — no database required.  

## 🔧 Features  

- Create new pastes via POST requests
- Retrieve pastes by ID 
- List all stored pastes
- JSON-based storage (no DB setup) 
- Modular codebase with only 4 files 

## 📦 Tech Stack

- Node.js
- Express.js
- Native `fs` module for storage
- Modular utility functions

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/minipaste.git
cd minipaste
2. Install dependencies
bash
npm install
3. Run the server
bash
node server.js
Server will start at http://localhost:3000
```
🧪 API Endpoints
Method	Endpoint	Description
POST	/api/paste	Create a new paste
GET	/api/paste/:id	Retrieve paste by ID
GET	/api/pastes	List all pastes
Example POST Request
```bash
curl -X POST http://localhost:3000/api/paste \
  -H "Content-Type: application/json" \
  -d '{"content":"Hello from MiniPaste!"}'
```
 
🛡 License
This project is licensed under the MIT License. See LICENSE for details.

🤝 Contributing
We welcome contributions! Please read CONTRIBUTING.md before submitting pull requests.

🌟 Show Your Support
If you find this project useful, give it a ⭐ on GitHub and share it with others!
