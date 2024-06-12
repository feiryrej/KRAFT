import express, { Express } from 'express';
import cors from 'cors';
import { indexRouter } from "./routes";

const app: Express =express()
const PORT: number = 5000
app.use(cors())
app.use(express.json())

app.use('/', indexRouter)

function logServerDetails(port: number) {
    console.log(`\nServer is running`)
    console.log(`\x1b[36m%s\x1b[0m`, `➜  Local:   http://localhost:${port}/`);
}

app.listen(PORT, () => {
    logServerDetails(PORT)
})