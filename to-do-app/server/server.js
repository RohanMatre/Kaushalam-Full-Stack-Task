const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()
const pool = require('./db')

// Get all todos
app.get('/todos', async (req, res) => {
    const userEmail = 'rohan@test.com'

    try{
        const todos = await pool.query('SELECT * FROM todo WHERE user_email = $1', [userEmail])
        res.json(todos.rows)
    } catch (error) {   
        console.log(error)
    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))