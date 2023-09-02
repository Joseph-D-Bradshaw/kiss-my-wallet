import express, { Request, Response } from "express"

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello there')
})


app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
})
