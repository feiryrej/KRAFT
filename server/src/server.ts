import express, {Express, Request, Response} from 'express';
import cors from 'cors';

const app: Express =express()
const PORT: number = 5000
app.use(cors())

app.get('/', async (req: Request, res: Response) => {
    res.json({ message: "Server is running"})
})

function logServerDetails(port: number) {
    console.log(`\nServer is running`)
    console.log(`\x1b[36m%s\x1b[0m`, `➜  Local:   http://localhost:${port}/`);
}

app.listen(PORT, () => {
    logServerDetails(PORT)
})