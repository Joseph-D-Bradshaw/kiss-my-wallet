import express from "express"
import { createDataBase } from "./database/database"


const db = createDataBase()
const app = express()
const port = process.env.PORT ?? 8000

app.use(express.static('public'))  // for hosting some arbitrary html/js for testing API easily
app.use(express.json())  // for parsing JSON bodies


app.get('/', (req, res) => {
    res.sendFile('./public/index.html')
})

app.get('/users', (req, res) => {
    res.send('You hit the /users GET endpoint')
})

app.get('/categories', (req, res) => {
    res.send('You hit the /categories GET endpoint')
})

app.get('/transactions', (req, res) => {
    res.send('You hit the /transactions GET endpoint')
})

app.post('/users', (req, res) => {
    res.send('You hit the /users POST endpoint')
})

app.post('/categories', (req, res) => {
    res.send('You hit the /categories POST endpoint')
})

app.post('/transactions', (req, res) => {
    res.send('You hit the /transactions POST endpoint')
})


if (port) {
    app.listen(port, () => {
        console.log(`server is running on port http://localhost:${port}`)
    })
} else {
    console.error("Server not started, port not acquired")
}
