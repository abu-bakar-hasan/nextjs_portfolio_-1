# Backend Notes

> Express + MongoDB + JWT Auth — Level 0 to Hero

---

## 1. Project Initialization

- Make a new folder, open it in VS Code. You're starting fresh, keep it clean.
- This turns your folder into a Node project — it creates `package.json` which tracks everything
  ```
  npm init -y
  ```
- Tell git to never touch these two — one's your dependencies, one's your secrets
  ```
  node_modules
  .env
  ```
- Start tracking your work
  ```
  git init
  ```

---

## 2. Install Core Packages

- One command, everything you need. Don't question it, just run it
  ```
  npm install express mongoose dotenv bcryptjs jsonwebtoken cookie-parser cors
  ```

- This one watches your files and restarts the server automatically. You'll thank it later
  ```
  npm install -D nodemon
  ```

- Tell npm how to run your app — add this to `package.json`
  ```json
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
  ```

---

## 3. Folder Structure

- Everything meaningful lives inside `src/` — think of it as the actual brain of your app
- Here's the job of each folder:

  - `config/` — DB connection lives here. Set it up once, forget about it
  - `models/` — the shape of your data. What does a User look like? Defined here
  - `controllers/` — the actual logic. What happens when someone hits register? This
  - `routes/` — the doorbell. Maps URLs to controllers
  - `app.js` — assembles everything together
  - `server.js` (root) — the on switch. Starts the whole thing

- `server.js` stays at root. Everything else goes inside `src/`. Don't mix them up

---

## 4. Environment Setup

- `.env` is where your secrets live — never push this to git, ever
- Create it at root and fill it in

  ```
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  ACCESS_TOKEN_SECRET=your_access_secret_key
  REFRESH_TOKEN_SECRET=your_refresh_secret_key
  ```

- Make your secrets hard to guess — random long strings, not "secret123"

---

## 5. server.js — The On Switch

- This file has one job — start the server. Keep it that way, don't dump logic here
- First line should always be `dotenv.config()` — env variables need to load before anything else reads them
- Import your express app from `src/app.js`
- Call the DB connect function
- Tell the server to listen on your PORT

---

## 6. app.js — Assembling the App

- Create your express instance here
- Stack your middleware in this order — order matters:
  - `cors` — lets your frontend actually talk to this server
  - `express.json()` — without this, `req.body` is undefined. Classic gotcha
  - `cookie-parser` — lets you read cookies from incoming requests
- Mount your routes at the bottom — e.g. auth routes at `/api/auth`
- Export the app so `server.js` can use it

---

## 7. Database Connection

- Create `src/config/db.js` — this is the only place mongoose connects
- Async function, `mongoose.connect()` with your `MONGO_URI`
- On success — log it so you know it worked
- On failure — log the error and call `process.exit(1)`. Don't let the server run without a DB
- Import and call this in `server.js` before starting the listener

---

## 8. Creating a Model

- Create `src/models/User.js` — this defines what a user looks like in your DB
- A schema is just a blueprint — fields, types, rules
- Common options you'll use: `type`, `required`, `unique`, `trim`, `default`
- Always export with `mongoose.model('User', yourSchema)` — the first argument becomes the collection name in MongoDB (lowercased + pluralized automatically)

---

## 9. Controllers & Routes

- Think of it like a restaurant — the **route** is the waiter taking your order, the **controller** is the kitchen actually making it
- Create `src/routes/auth.routes.js` — use `express.Router()`, attach paths to controller functions, export it
- Create `src/controllers/auth.controller.js` — import the model, write the logic, send the response
- Mount the router in `app.js`

> Every request flows like this: Client → Route → Controller → Model → DB → Response back

---

## 10. Auth Flow

### Password Hashing

- Storing plain passwords is a crime. Always hash before saving
- The `10` is the salt rounds — how many times it scrambles. 10 is the sweet spot, don't overthink it

  ```js
  const hashedPassword = await bcrypt.hash(password, 10);
  ```

- On login, compare what they typed against the stored hash — bcrypt handles it

  ```js
  const isMatch = await bcrypt.compare(password, user.password);
  ```

---

### Generating Tokens

- Access token — short lived, used for every request. 15 minutes is standard
- Refresh token — long lived, used only to get a new access token. 7 days

  ```js
  const accessToken = jwt.sign(
    { id: user._id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '15m' }
  );
  ```

  ```js
  const refreshToken = jwt.sign(
    { id: user._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' }
  );
  ```

---

### Sending Tokens via Cookie

- Refresh token goes in an httpOnly cookie — the browser holds it but JS can't touch it. That's the whole point
- Access token goes in the response body — frontend keeps it in memory, not localStorage

  ```js
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in ms
  });
  ```

---

### Protect Middleware

- Create `src/middleware/protect.js`
- Reads the access token from the `Authorization` header, verifies it, attaches the user to `req`
- If it passes — `next()`. If it fails — `401` and stop right there

  ```js
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  ```

- Slap this middleware on any route that requires the user to be logged in

---

## 11. Testing the Server

- Fire it up
  ```
  npm run dev
  ```

- Use **Thunder Client** (VS Code extension) — it's Postman but lives inside VS Code
- Test in this order:
  - `POST /api/auth/register` with a JSON body — check if user appears in MongoDB
  - `POST /api/auth/login` — check the response for the access token and the cookie in the headers
  - Hit a protected route with `Authorization: Bearer <token>` — should work
  - Hit it without the token — should get a 401
- Open MongoDB Compass or Atlas to confirm data is actually saving

---

> *When something breaks — read the terminal error top to bottom, check `.env` first, then `console.log` everything until you find it.*
