const PORT = process.env.PORT ?? 8000
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const app = express()
const pool = require('./db')

app.use(cors())
app.use(express.json())

// Get all todos
app.get('/todos/:userEmail', async (req, res) => {
    const {userEmail} = req.params

    try{
        const todos = await pool.query('SELECT * FROM todo WHERE user_email = $1', [userEmail])
        res.json(todos.rows)
    } catch (error) {   
        console.error(error)
    }
})

// Create a new todo
app.post('/todos', async (req, res) => {
    const {user_email, title, progress, date} = req.body
    console.log(user_email, title, progress, date)
    const id = uuidv4()
    try{
        const newTodo = await pool.query(`INSERT INTO todo (id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)`, [id, user_email, title, progress, date])
        res.json(newTodo)
    } catch (error) {   
        console.error(error)
    }
})

// Edit a todo
app.put('/todos/:id', async (req, res) => {
    const {id} = req.params
    const {user_email, title, progress, date} = req.body
    try{
        const updatedTodo = await pool.query(`UPDATE todo SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5`, [user_email, title, progress, date, id])
        res.json(updatedTodo)
    } catch (error) {   
        console.error(error)
    }
})

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
    const {id} = req.params
    try{
        const deletedTodo = await pool.query(`DELETE FROM todo WHERE id = $1`, [id])
        res.json(deletedTodo)
    } catch (error) {   
        console.error(error)
    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))