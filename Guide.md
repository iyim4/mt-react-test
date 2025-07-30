# How to Create a React + Flask Web App

A brief step-by-step guide to build a basic web app using React for the frontend and Flask for the backend.

### Required Software
- [Download Node.js](https://nodejs.org/en/download). If there's a "running scripts is disabled" error on windows, run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
- get create-react-app with `npm install -g create-react-app` in the terminal
- [Download Python](https://www.python.org/downloads/). Might be installed along with Node.js
- get Flask with `pip install flask` in the terminal


## Step 1: Set Up the File Structure

```bash
mkdir test-app
cd test-app
mkdir backend
npx create-react-app temp
ren temp frontend
```

`create-react-app` has already created the frontend for you! Your project should now look like this:

```
test-app/
├── backend/			# empty
└── frontend/			# created by create-react-app
    ├── public/
    ├── src/
    ├── package.json
    └── ...
```

### Optional: Set up version control
If you want to track updates for both the frontend and the backend together like I did, you need to delete the git repository in the frontend folder, which was created by `create-react-app`
```bash
git init
cd frontend
rm -rf .git
```

## Step 2: Set Up Flask Backend
This may take a few minutes.

```bash
cd backend
python -m venv venv
venv/Scripts/activate  # use 'source venv/bin/activate' on macOS/Linux
pip install flask flask-cors
pip freeze > requirements.txt
```

## Step 3: Add Python Files and Connect Endpoints

### Understanding Endpoints

Endpoints are like mailing addresses. The backend waits at a specific address (endpoint), ready to receive requests. The frontend sends a message—like mailing a letter—with instructions. The backend reads it, performs tasks, and replies with data—like sending a response letter.

### Define Flask Endpoint

In the `backend` folder, create a file called `app.py`:

```python
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/get-sample')
def get_sample():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True)
```

### Create React Component to Fetch Flask Data

Move to the `frontend` folder, and create a `components` folder. Create a file called `SampleComponent.js` inside:

```javascript
import React, { useEffect, useState } from 'react';

const SampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/get-sample')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return <div>{data}</div>;
};

export default SampleComponent;
```

Add `SampleComponent` to `App.js` to render the data:
```javascript
import './App.css';
import SampleData from './components/SampleData';

function App() {
  return (
    <div>
      <SampleData />
    </div>
  );
}
```

By default, the app is hosted on `http://localhost:5000`. For clarity, add it to `package.json` 
```json
"proxy": "http://localhost:5000",
```

## Step 4: Run the App

Open two terminals—one for each service.

**Terminal 1: Run Flask**
```bash
cd backend
python app.py
```

**Terminal 2: Run React**
```bash
cd frontend
npm start
```

Use ctrl+c in the terminals to stop running the web app.

## Next Steps

After everything is working, it's a good idea to save your files, make a git commit, and take an eye break. Possible ideas:

- Frontend: add more components, pages, and css styling
- Backend: add more endpoints and funtionality
- Deployment: online. you can use services like Heroku, Vercel, Netlify, or Azure Web Apps (like me!)