const PORT = process.env.PORT ?? 8000;
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const app = express();
const pool = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

// Get all todos
app.get("/todos/:userEmail", async (req, res) => {
  const { userEmail } = req.params;

  try {
    const todos = await pool.query("SELECT * FROM todo WHERE user_email = $1", [
      userEmail,
    ]);
    res.json(todos.rows);
  } catch (error) {
    console.error(error);
  }
});

// Create a new todo
app.post("/todos", async (req, res) => {
  const { user_email, title, progress, date } = req.body;
  console.log(user_email, title, progress, date);
  const id = uuidv4();
  try {
    const newTodo = await pool.query(
      `INSERT INTO todo (id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)`,
      [id, user_email, title, progress, date]
    );
    res.json(newTodo);
  } catch (error) {
    console.error(error);
  }
});

// Edit a todo
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { user_email, title, progress, date } = req.body;
  try {
    const updatedTodo = await pool.query(
      `UPDATE todo SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5`,
      [user_email, title, progress, date, id]
    );
    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
  }
});

// Delete a todo
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await pool.query(`DELETE FROM todo WHERE id = $1`, [
      id,
    ]);
    res.json(deletedTodo);
  } catch (error) {
    console.error(error);
  }
});

// Signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const newUser = await pool.query(
      `INSERT INTO users (email, hashed_password) VALUES($1, $2)`,
      [email, hashedPassword]
    );
    const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });
    res.json({ email, token });
  } catch (error) {
    console.error(error);
    if (error) {
      res.json({ detail: error.detail });
    }
  }
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await pool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );
    
    if (!users.rows.length) return res.json({ detail: "User not found" });
    
    const success = await bcrypt.compare(password, users.rows[0].hashed_password);
    const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });

    if (success){
        res.json({'email': users.rows[0].email, token})
    } else {
        res.json({ detail: "Invalid credentials" });
    }

  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
